const http = require("http");
const url = require("url");

let users = [];
let idCounter = 1;

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

function logRequest(req) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}

const server = http.createServer(async (req, res) => {
  logRequest(req);

  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const method = req.method;

  if (pathname === "/api/users") {
    res.setHeader("Content-Type", "application/json");

    try {
      if (method === "GET") {
        if (query.id) {
          const user = users.find((u) => u.id == query.id);
          if (!user) {
            res.writeHead(404);
            return res.end(JSON.stringify({ error: "User not found" }));
          }
          return res.end(JSON.stringify(user));
        } else {
          return res.end(JSON.stringify(users));
        }
      }

      if (method === "POST") {
        const body = await parseBody(req);
        const newUser = { id: idCounter++, ...body };
        users.push(newUser);
        res.writeHead(201);
        return res.end(
          JSON.stringify({ message: "User created", data: newUser })
        );
      }

      if (method === "PUT") {
        const body = await parseBody(req);
        if (!body.id) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: "User ID required" }));
        }
        const index = users.findIndex((u) => u.id == body.id);
        if (index === -1) {
          res.writeHead(404);
          return res.end(JSON.stringify({ error: "User not found" }));
        }
        users[index] = { ...users[index], ...body };
        return res.end(
          JSON.stringify({ message: "User updated", data: users[index] })
        );
      }

      if (method === "DELETE") {
        const body = await parseBody(req);
        const index = users.findIndex((u) => u.id == body.id);
        if (index === -1) {
          res.writeHead(404);
          return res.end(JSON.stringify({ error: "User not found" }));
        }
        const deleted = users.splice(index, 1);
        return res.end(
          JSON.stringify({ message: "User deleted", data: deleted[0] })
        );
      }

      res.writeHead(405);
      res.end(JSON.stringify({ error: "Method not allowed" }));
    } catch (err) {
      res.writeHead(500);
      res.end(
        JSON.stringify({ error: "Internal Server Error", details: err.message })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
