// Create buffer from text
function createBuffer(text) {
    return Buffer.from(text, 'utf-8');
}

// Concatenate multiple buffers
function concatenateBuffers(buffers) {
    return Buffer.concat(buffers);
}

// Transform buffer content (convert to uppercase)
function transformBuffer(buffer) {
  return Buffer.from(buffer.toString().toUpperCase());
}
// Convert to base64
function convertToBase64(buffer) {
    return buffer.toString('base64');
}

// Slice buffer
function sliceBuffer(buffer, start, end) {
    return buffer.slice(start, end);
}

//#Example Usage
const buf1 = createBuffer('Hello');
const buf2 = createBuffer(' World');

const combinedBuffer = concatenateBuffers([buf1, buf2]);
console.log('Concatenated Buffer:', combinedBuffer.toString());

const transformedBuffer = transformBuffer(combinedBuffer);
console.log('Transformed Buffer:', transformedBuffer.toString());

const base64String = convertToBase64(combinedBuffer);
console.log('Base64 Encoded:', base64String);

const slicedBuffer = sliceBuffer(combinedBuffer, 0, 5);
console.log('Sliced Buffer:', slicedBuffer.toString());
