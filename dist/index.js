var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/gl-matrix/esm/common.js
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var degree = Math.PI / 180;
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };

// node_modules/gl-matrix/esm/mat3.js
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

// node_modules/gl-matrix/esm/mat4.js
var exports_mat4 = {};
__export(exports_mat4, {
  transpose: () => transpose,
  translate: () => translate,
  targetTo: () => targetTo,
  subtract: () => subtract,
  sub: () => sub,
  str: () => str,
  set: () => set,
  scale: () => scale,
  rotateZ: () => rotateZ,
  rotateY: () => rotateY,
  rotateX: () => rotateX,
  rotate: () => rotate,
  perspectiveZO: () => perspectiveZO,
  perspectiveNO: () => perspectiveNO,
  perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
  perspective: () => perspective,
  orthoZO: () => orthoZO,
  orthoNO: () => orthoNO,
  ortho: () => ortho,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd,
  multiplyScalar: () => multiplyScalar,
  multiply: () => multiply,
  mul: () => mul,
  lookAt: () => lookAt,
  invert: () => invert,
  identity: () => identity,
  getTranslation: () => getTranslation,
  getScaling: () => getScaling,
  getRotation: () => getRotation,
  frustum: () => frustum,
  fromZRotation: () => fromZRotation,
  fromYRotation: () => fromYRotation,
  fromXRotation: () => fromXRotation,
  fromValues: () => fromValues,
  fromTranslation: () => fromTranslation,
  fromScaling: () => fromScaling,
  fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
  fromRotationTranslationScale: () => fromRotationTranslationScale,
  fromRotationTranslation: () => fromRotationTranslation,
  fromRotation: () => fromRotation,
  fromQuat2: () => fromQuat2,
  fromQuat: () => fromQuat,
  frob: () => frob,
  exactEquals: () => exactEquals,
  equals: () => equals,
  determinant: () => determinant,
  create: () => create2,
  copy: () => copy,
  clone: () => clone,
  adjoint: () => adjoint,
  add: () => add
});
function create2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  if (len < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale2) {
  out[0] = a[0] + b[0] * scale2;
  out[1] = a[1] + b[1] * scale2;
  out[2] = a[2] + b[2] * scale2;
  out[3] = a[3] + b[3] * scale2;
  out[4] = a[4] + b[4] * scale2;
  out[5] = a[5] + b[5] * scale2;
  out[6] = a[6] + b[6] * scale2;
  out[7] = a[7] + b[7] * scale2;
  out[8] = a[8] + b[8] * scale2;
  out[9] = a[9] + b[9] * scale2;
  out[10] = a[10] + b[10] * scale2;
  out[11] = a[11] + b[11] * scale2;
  out[12] = a[12] + b[12] * scale2;
  out[13] = a[13] + b[13] * scale2;
  out[14] = a[14] + b[14] * scale2;
  out[15] = a[15] + b[15] * scale2;
  return out;
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var perspective = perspectiveNO;
var ortho = orthoNO;
var mul = multiply;
var sub = subtract;

// node_modules/gl-matrix/esm/quat.js
var exports_quat = {};
__export(exports_quat, {
  str: () => str3,
  squaredLength: () => squaredLength3,
  sqrLen: () => sqrLen2,
  sqlerp: () => sqlerp,
  slerp: () => slerp,
  setAxisAngle: () => setAxisAngle,
  setAxes: () => setAxes,
  set: () => set4,
  scale: () => scale4,
  rotationTo: () => rotationTo,
  rotateZ: () => rotateZ3,
  rotateY: () => rotateY3,
  rotateX: () => rotateX3,
  random: () => random2,
  pow: () => pow,
  normalize: () => normalize3,
  multiply: () => multiply3,
  mul: () => mul3,
  ln: () => ln,
  lerp: () => lerp3,
  length: () => length3,
  len: () => len2,
  invert: () => invert2,
  identity: () => identity2,
  getAxisAngle: () => getAxisAngle,
  getAngle: () => getAngle,
  fromValues: () => fromValues4,
  fromMat3: () => fromMat3,
  fromEuler: () => fromEuler,
  exp: () => exp,
  exactEquals: () => exactEquals4,
  equals: () => equals4,
  dot: () => dot3,
  create: () => create5,
  copy: () => copy4,
  conjugate: () => conjugate,
  clone: () => clone4,
  calculateW: () => calculateW,
  add: () => add4
});

// node_modules/gl-matrix/esm/vec3.js
var exports_vec3 = {};
__export(exports_vec3, {
  zero: () => zero,
  transformQuat: () => transformQuat,
  transformMat4: () => transformMat4,
  transformMat3: () => transformMat3,
  subtract: () => subtract2,
  sub: () => sub2,
  str: () => str2,
  squaredLength: () => squaredLength,
  squaredDistance: () => squaredDistance,
  sqrLen: () => sqrLen,
  sqrDist: () => sqrDist,
  set: () => set2,
  scaleAndAdd: () => scaleAndAdd,
  scale: () => scale2,
  round: () => round,
  rotateZ: () => rotateZ2,
  rotateY: () => rotateY2,
  rotateX: () => rotateX2,
  random: () => random,
  normalize: () => normalize,
  negate: () => negate,
  multiply: () => multiply2,
  mul: () => mul2,
  min: () => min,
  max: () => max,
  lerp: () => lerp,
  length: () => length,
  len: () => len,
  inverse: () => inverse,
  hermite: () => hermite,
  fromValues: () => fromValues2,
  forEach: () => forEach,
  floor: () => floor,
  exactEquals: () => exactEquals2,
  equals: () => equals2,
  dot: () => dot,
  divide: () => divide,
  div: () => div,
  distance: () => distance,
  dist: () => dist,
  cross: () => cross,
  create: () => create3,
  copy: () => copy2,
  clone: () => clone2,
  ceil: () => ceil,
  bezier: () => bezier,
  angle: () => angle,
  add: () => add2
});
function create3() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues2(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set2(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply2(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale3) {
  out[0] = a[0] + b[0] * scale3;
  out[1] = a[1] + b[1] * scale3;
  out[2] = a[2] + b[2] * scale3;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale3) {
  scale3 = scale3 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale3;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale3;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str2(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub2 = subtract2;
var mul2 = multiply2;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
  var vec = create3();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset;i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/vec4.js
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone3(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues3(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set3(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function scale3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len2 = x * x + y * y + z * z + w * w;
  if (len2 > 0) {
    len2 = 1 / Math.sqrt(len2);
  }
  out[0] = x * len2;
  out[1] = y * len2;
  out[2] = z * len2;
  out[3] = w * len2;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function lerp2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
function exactEquals3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals3(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var forEach2 = function() {
  var vec = create4();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset;i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/quat.js
function create5() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply3(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale4(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random2(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert2(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot3 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot3 ? 1 / dot3 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str3(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone4 = clone3;
var fromValues4 = fromValues3;
var copy4 = copy3;
var set4 = set3;
var add4 = add3;
var mul3 = multiply3;
var scale4 = scale3;
var dot3 = dot2;
var lerp3 = lerp2;
var length3 = length2;
var len2 = length3;
var squaredLength3 = squaredLength2;
var sqrLen2 = squaredLength3;
var normalize3 = normalize2;
var exactEquals4 = exactEquals3;
var equals4 = equals3;
var rotationTo = function() {
  var tmpvec3 = create3();
  var xUnitVec3 = fromValues2(1, 0, 0);
  var yUnitVec3 = fromValues2(0, 1, 0);
  return function(out, a, b) {
    var dot4 = dot(a, b);
    if (dot4 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001)
        cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot4 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot4;
      return normalize3(out, out);
    }
  };
}();
var sqlerp = function() {
  var temp1 = create5();
  var temp2 = create5();
  return function(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
var setAxes = function() {
  var matr = create();
  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize3(out, fromMat3(out, matr));
  };
}();

// node_modules/gl-matrix/esm/vec2.js
var exports_vec2 = {};
__export(exports_vec2, {
  zero: () => zero2,
  transformMat4: () => transformMat42,
  transformMat3: () => transformMat32,
  transformMat2d: () => transformMat2d,
  transformMat2: () => transformMat2,
  subtract: () => subtract3,
  sub: () => sub3,
  str: () => str4,
  squaredLength: () => squaredLength4,
  squaredDistance: () => squaredDistance2,
  sqrLen: () => sqrLen3,
  sqrDist: () => sqrDist2,
  set: () => set5,
  scaleAndAdd: () => scaleAndAdd2,
  scale: () => scale5,
  round: () => round2,
  rotate: () => rotate2,
  random: () => random3,
  normalize: () => normalize4,
  negate: () => negate2,
  multiply: () => multiply4,
  mul: () => mul4,
  min: () => min2,
  max: () => max2,
  lerp: () => lerp4,
  length: () => length4,
  len: () => len3,
  inverse: () => inverse2,
  fromValues: () => fromValues5,
  forEach: () => forEach3,
  floor: () => floor2,
  exactEquals: () => exactEquals5,
  equals: () => equals5,
  dot: () => dot4,
  divide: () => divide2,
  div: () => div2,
  distance: () => distance2,
  dist: () => dist2,
  cross: () => cross2,
  create: () => create6,
  copy: () => copy5,
  clone: () => clone5,
  ceil: () => ceil2,
  angle: () => angle2,
  add: () => add5
});
function create6() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function clone5(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function fromValues5(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
function copy5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set5(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add5(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply4(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function ceil2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
function floor2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
function min2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
function max2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
function round2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
function scale5(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function scaleAndAdd2(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length4(a) {
  var x = a[0], y = a[1];
  return Math.hypot(x, y);
}
function squaredLength4(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len3 = x * x + y * y;
  if (len3 > 0) {
    len3 = 1 / Math.sqrt(len3);
  }
  out[0] = a[0] * len3;
  out[1] = a[1] * len3;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross2(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
function lerp4(out, a, b, t) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
function random3(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  out[0] = Math.cos(r) * scale6;
  out[1] = Math.sin(r) * scale6;
  return out;
}
function transformMat2(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
function transformMat2d(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat42(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function rotate2(out, a, b, rad) {
  var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
function angle2(a, b) {
  var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero2(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function str4(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals5(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function equals5(a, b) {
  var a0 = a[0], a1 = a[1];
  var b0 = b[0], b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
}
var len3 = length4;
var sub3 = subtract3;
var mul4 = multiply4;
var div2 = divide2;
var dist2 = distance2;
var sqrDist2 = squaredDistance2;
var sqrLen3 = squaredLength4;
var forEach3 = function() {
  var vec = create6();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset;i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
}();

// node_modules/jurassic-nursery/packages/game/assets/geometry.bin
var geometry_default = "./geometry-rg4xzv5k.bin";

// node_modules/jurassic-nursery/packages/game/utils/triangle2d.ts
var isInsideTriangle = (ax, ay, bx, by, cx, cy, ox, oy) => side(ax, ay, bx, by, ox, oy) && side(bx, by, cx, cy, ox, oy) && side(cx, cy, ax, ay, ox, oy);
var side = (ax, ay, bx, by, ox, oy) => {
  const nx = by - ay;
  const ny = -(bx - ax);
  const vx = ox - ax;
  const vy = oy - ay;
  return nx * vx + ny * vy >= 0;
};

// node_modules/jurassic-nursery/packages/game/utils/vec3.ts
var UP = [0, 1, 0];
var setFromArray = (out, arr, i) => exports_vec3.set(out, arr[i * 3 + 0], arr[i * 3 + 1], arr[i * 3 + 2]);
var setIntoArray = (arr, i, v) => setIntoArrayValues(arr, i, v[0], v[1], v[2]);
var setIntoArrayValues = (arr, i, x, y, z) => {
  arr[i * 3 + 0] = x;
  arr[i * 3 + 1] = y;
  arr[i * 3 + 2] = z;
};

// node_modules/jurassic-nursery/packages/game/renderer/geometries/utils/flatShading.ts
var ab = [0, 0, 0];
var ac = [0, 0, 0];
var a = [0, 0, 0];
var b = [0, 0, 0];
var c = [0, 0, 0];
var n = [0, 0, 0];
var getFlatShadingNormals = (positions) => {
  const normals = new Float32Array(positions.length);
  for (let i = 0;i < positions.length / 3; i += 3) {
    const ak = (i + 0) * 3;
    const bk = (i + 1) * 3;
    const ck = (i + 2) * 3;
    exports_vec3.set(a, positions[ak + 0], positions[ak + 1], positions[ak + 2]);
    exports_vec3.set(b, positions[bk + 0], positions[bk + 1], positions[bk + 2]);
    exports_vec3.set(c, positions[ck + 0], positions[ck + 1], positions[ck + 2]);
    exports_vec3.subtract(ab, a, b);
    exports_vec3.subtract(ac, a, c);
    exports_vec3.cross(n, ab, ac);
    exports_vec3.normalize(n, n);
    normals[ak + 0] = normals[bk + 0] = normals[ck + 0] = n[0];
    normals[ak + 1] = normals[bk + 1] = normals[ck + 1] = n[1];
    normals[ak + 2] = normals[bk + 2] = normals[ck + 2] = n[2];
  }
  return normals;
};

// node_modules/jurassic-nursery/packages/game/renderer/geometries/utils/tesselate.ts
var tesselate = (positions) => {
  const p = [];
  const a2 = [];
  const b2 = [];
  const c2 = [];
  const m_ab = [];
  const m_bc = [];
  const m_ca = [];
  for (let i = 0;i < positions.length; i += 3 * 3) {
    setFromArray(a2, positions, i / 3 + 0);
    setFromArray(b2, positions, i / 3 + 1);
    setFromArray(c2, positions, i / 3 + 2);
    exports_vec3.lerp(m_ab, a2, b2, 0.5);
    exports_vec3.lerp(m_bc, b2, c2, 0.5);
    exports_vec3.lerp(m_ca, c2, a2, 0.5);
    p.push(...a2, ...m_ab, ...m_ca, ...m_ab, ...b2, ...m_bc, ...m_bc, ...c2, ...m_ca, ...m_ca, ...m_ab, ...m_bc);
  }
  return p;
};

// node_modules/jurassic-nursery/packages/game/utils/array.ts
var pickMaxIndices = (arr, n2) => {
  const max_is = Array.from({ length: n2 }, (_, i) => i);
  max_is.sort((a2, b2) => arr[a2] - arr[b2]);
  for (let i = n2;i < arr.length; i++) {
    if (arr[max_is[0]] < arr[i]) {
      max_is[0] = i;
      max_is.sort((a2, b2) => arr[a2] - arr[b2]);
    }
  }
  return max_is.reverse();
};

// node_modules/jurassic-nursery/packages/game/renderer/geometries/model/computeWeights.ts
var computeWeights = (bones, positions) => {
  const boneIndexes = [];
  const weights = [];
  const bonePositions = bones.slice(0, -2).map((m) => exports_mat4.getTranslation(exports_vec3.create(), m));
  const p = [];
  for (let i = 0;i < positions.length / 3; i++) {
    setFromArray(p, positions, i);
    const w = bonePositions.map((b2, i2) => {
      const d = exports_vec3.distance(p, b2) ** 4;
      return 1 / d + (i2 === 0 ? 0.1 : 0);
    });
    const is = pickMaxIndices(w, 4);
    const sum = is.reduce((s, i2) => s + w[i2], 0);
    weights.push(...is.map((i2) => w[i2] / sum));
    boneIndexes.push(...is);
  }
  return { weights, boneIndexes };
};

// node_modules/jurassic-nursery/packages/game/entities/triceratops.ts
var triceratops = new Map;
var MAX_TRICERATOPS = 128;

// node_modules/jurassic-nursery/packages/game/renderer/geometries/model/skeleton.ts
var N_BONES = 1 + 3 + 2 + 2 * 4 + 2;
var a2 = exports_vec3.create();
var q = exports_quat.create();
var m = exports_mat4.create();
var QUAT0 = exports_quat.create();
var updateTriceratopsBones = (bones, {
  size,
  o: origin,
  direction,
  tail_direction,
  head_direction,
  eye0_direction,
  eye1_direction,
  feet
}) => {
  const [
    main,
    tail1,
    tail2,
    tail3,
    head1,
    head2,
    leg0,
    foot0,
    leg1,
    foot1,
    leg2,
    foot2,
    leg3,
    foot3,
    eye0,
    eye1
  ] = bones;
  exports_vec3.set(a2, size, size, size);
  const originy0 = origin[1];
  if (origin[1] === 0.6)
    origin[1] *= size;
  exports_mat4.fromRotationTranslationScale(main, direction, origin, a2);
  origin[1] = originy0;
  exports_vec3.set(a2, -0.3, -0.02, 0);
  exports_mat4.fromTranslation(tail1, a2);
  exports_quat.slerp(q, tail_direction, QUAT0, 0.5);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(tail1, m, tail1);
  exports_mat4.multiply(tail1, main, tail1);
  exports_vec3.set(a2, -0.3, -0.1, 0);
  exports_mat4.fromTranslation(tail2, a2);
  exports_mat4.fromQuat(m, tail_direction);
  exports_mat4.multiply(tail2, m, tail2);
  exports_mat4.multiply(tail2, tail1, tail2);
  exports_vec3.set(a2, -0.34, -0.05, 0);
  exports_mat4.fromTranslation(tail3, a2);
  exports_mat4.fromQuat(m, tail_direction);
  exports_mat4.multiply(tail3, m, tail3);
  exports_mat4.multiply(tail3, tail2, tail3);
  exports_vec3.set(a2, 0.43, -0.04, 0);
  exports_mat4.fromTranslation(head1, a2);
  exports_quat.slerp(q, head_direction, QUAT0, 0.5);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(head1, m, head1);
  exports_mat4.multiply(head1, main, head1);
  exports_vec3.set(a2, 0.45, -0.14, 0);
  exports_mat4.fromTranslation(head2, a2);
  exports_mat4.fromQuat(m, head_direction);
  exports_mat4.multiply(head2, m, head2);
  exports_mat4.multiply(head2, head1, head2);
  exports_vec3.set(a2, -0.12, -0.18, 0.2);
  exports_mat4.fromTranslation(leg0, a2);
  exports_quat.fromEuler(q, 0, feet[0] * 13, feet[0] * 20);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg0, m, leg0);
  exports_mat4.multiply(leg0, head1, leg0);
  exports_vec3.set(a2, 0.05, -0.34, 0.02);
  exports_mat4.fromTranslation(foot0, a2);
  exports_quat.fromEuler(q, 0, 0, feet[0] * 45);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(foot0, m, foot0);
  exports_mat4.multiply(foot0, leg0, foot0);
  exports_vec3.set(a2, -0.12, -0.18, -0.2);
  exports_mat4.fromTranslation(leg1, a2);
  exports_quat.fromEuler(q, 0, -feet[1] * 13, feet[1] * 20);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg1, m, leg1);
  exports_mat4.multiply(leg1, head1, leg1);
  exports_vec3.set(a2, 0.05, -0.34, 0.02);
  exports_mat4.fromTranslation(foot1, a2);
  exports_quat.fromEuler(q, 0, 0, feet[1] * 45);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(foot1, m, foot1);
  exports_mat4.multiply(foot1, leg1, foot1);
  exports_vec3.set(a2, 0.06, -0.2, 0.2);
  exports_mat4.fromTranslation(leg2, a2);
  exports_quat.fromEuler(q, 0, 0, feet[2] * 23);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg2, m, leg2);
  exports_quat.fromEuler(q, 0, feet[2] * 13, 0);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg2, m, leg2);
  exports_mat4.multiply(leg2, tail1, leg2);
  exports_vec3.set(a2, -0.02, -0.38, 0.06);
  exports_mat4.fromTranslation(foot2, a2);
  exports_quat.fromEuler(q, 0, 0, Math.min(feet[2], 0.7) * 36);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(foot2, m, foot2);
  exports_mat4.multiply(foot2, leg2, foot2);
  exports_vec3.set(a2, 0.06, -0.2, -0.2);
  exports_mat4.fromTranslation(leg3, a2);
  exports_quat.fromEuler(q, 0, 0, feet[3] * 23);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg3, m, leg3);
  exports_quat.fromEuler(q, 0, feet[3] * 13, 0);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(leg3, m, leg3);
  exports_mat4.multiply(leg3, tail1, leg3);
  exports_vec3.set(a2, -0.02, -0.38, -0.09);
  exports_mat4.fromTranslation(foot3, a2);
  exports_quat.fromEuler(q, 0, 0, Math.min(feet[3], 0.7) * 36);
  exports_mat4.fromQuat(m, q);
  exports_mat4.multiply(foot3, m, foot3);
  exports_mat4.multiply(foot3, leg3, foot3);
  exports_quat.slerp(q, head_direction, QUAT0, 0.5);
  exports_mat4.fromQuat(m, q);
  exports_vec3.set(a2, 0.3, 0.14, 0.12);
  exports_mat4.fromRotationTranslation(eye0, eye0_direction, a2);
  exports_mat4.multiply(eye0, m, eye0);
  exports_mat4.multiply(eye0, head1, eye0);
  exports_vec3.set(a2, 0.3, 0.14, -0.12);
  exports_mat4.fromRotationTranslation(eye1, eye1_direction, a2);
  exports_mat4.multiply(eye1, m, eye1);
  exports_mat4.multiply(eye1, head1, eye1);
};
var createSkeleton = () => {
  const origin = [0, 0.6, 0];
  const direction = exports_quat.create();
  const tail_direction = exports_quat.create();
  const head_direction = exports_quat.create();
  const eye0_direction = exports_quat.create();
  const eye1_direction = exports_quat.create();
  const feet = [0, 0, 0, 0];
  return {
    size: 1,
    o: origin,
    direction,
    tail_direction,
    head_direction,
    eye0_direction,
    eye1_direction,
    feet
  };
};
var bonesMatrices = new Float32Array(16 * N_BONES * MAX_TRICERATOPS);
var ms = Array.from({ length: MAX_TRICERATOPS }, (_, j) => Array.from({ length: N_BONES }, (_2, i) => new Float32Array(bonesMatrices.buffer, (j * N_BONES + i) * 16 * 4, 16)));
var bindPose = Array.from({ length: N_BONES }, exports_mat4.create);
updateTriceratopsBones(bindPose, createSkeleton());
var bindPoseInv = bindPose.map((m2) => exports_mat4.invert(exports_mat4.create(), m2));
var update = () => {
  let i = 0;
  for (const t of triceratops.values()) {
    updateTriceratopsBones(ms[i], t);
    for (let j = N_BONES;j--; )
      exports_mat4.multiply(ms[i][j], ms[i][j], bindPoseInv[j]);
    i++;
  }
};

// node_modules/jurassic-nursery/packages/game/renderer/geometries/model/sphere.ts
var createPyramidKernel = (n2 = 5) => {
  const positions = [];
  const a3 = [0, 0, 0];
  const b2 = [0, 0, 0];
  for (let i = n2;i--; ) {
    a3[0] = Math.cos(i / n2 * Math.PI * 2);
    a3[2] = Math.sin(i / n2 * Math.PI * 2);
    b2[0] = Math.cos((i + 1) / n2 * Math.PI * 2);
    b2[2] = Math.sin((i + 1) / n2 * Math.PI * 2);
    positions.push(...a3, 0, 1, 0, ...b2, 0, -1, 0, ...a3, ...b2);
  }
  return positions;
};
var p = [];
var tesselateSphere = (positions) => {
  positions = tesselate(positions);
  for (let i = positions.length / 3;i--; ) {
    setFromArray(p, positions, i);
    exports_vec3.normalize(p, p);
    setIntoArray(positions, i, p);
  }
  return positions;
};

// node_modules/jurassic-nursery/packages/game/renderer/geometries/model/model.ts
var createGeometry = async () => {
  const buffer = await fetch(geometry_default).then((res) => res.arrayBuffer());
  let positions = [...new Uint8Array(buffer)].map((x, i) => {
    x /= 256;
    if (i % 3 == 0)
      return (x - 0.5) * 2;
    if (i % 3 == 1)
      return x * 1;
    if (i % 3 == 2)
      return (x - 0.5) * 0.75;
    return 0;
  });
  positions = tesselate(positions);
  const { weights, boneIndexes } = computeWeights(bindPose, positions);
  const normals = getFlatShadingNormals(positions);
  const a3 = [];
  const b2 = [];
  const c2 = [];
  const p2 = [];
  const n2 = [];
  const m2 = exports_mat4.create();
  const q2 = exports_quat.create();
  const colorPattern = Array.from({ length: positions.length / 3 }, () => 0);
  const ux_default = (Math.random() - 0.5) * 1;
  const N_STRIPE = 6;
  const N_WIDTH = 25;
  const N_THICKNESS = 3;
  for (let j = N_STRIPE;j--; ) {
    const ox = (j / N_STRIPE - 0.5) * 2;
    const oz = 0;
    let ux = ux_default + (Math.random() - 0.5) * 0.1;
    let uz = 1;
    const l = Math.hypot(ux, uz);
    ux /= l;
    uz /= l;
    for (let w = N_WIDTH;w--; )
      for (let th = N_THICKNESS;th--; ) {
        const tw = (w / N_WIDTH - 0.5) * 1.4;
        const tt = (th / N_THICKNESS - 0.5) * 0.09;
        const x = ox + ux * tw + uz * tt;
        const z = oz + uz * tw - ux * tt;
        for (let i = 0;i < positions.length / 3; i += 3) {
          setFromArray(a3, positions, i + 0);
          setFromArray(b2, positions, i + 1);
          setFromArray(c2, positions, i + 2);
          setFromArray(n2, normals, i);
          if (a3[1] > 0.5 && b2[1] > 0.5 && c2[1] > 0.5 && isInsideTriangle(a3[0], a3[2], b2[0], b2[2], c2[0], c2[2], x, z) && exports_vec3.dot(n2, UP) > 0.2) {
            colorPattern[i + 0] = 2;
            colorPattern[i + 1] = 2;
            colorPattern[i + 2] = 2;
          }
        }
      }
  }
  for (let k = 80;k--; ) {
    const x = (Math.random() - 0.5) * 2;
    const z = (Math.random() - 0.5) * 0.75;
    for (let i = 0;i < positions.length / 3; i += 3) {
      setFromArray(a3, positions, i + 0);
      setFromArray(b2, positions, i + 1);
      setFromArray(c2, positions, i + 2);
      setFromArray(n2, normals, i);
      if (isInsideTriangle(a3[0], a3[2], b2[0], b2[2], c2[0], c2[2], x, z) && exports_vec3.dot(n2, UP) > 0.2) {
        const h = colorPattern[i + 0] === 2 ? 3 : 1;
        colorPattern[i + 0] = h;
        colorPattern[i + 1] = h;
        colorPattern[i + 2] = h;
      }
    }
  }
  for (let i = 0;i < positions.length / 3; i += 3) {
    setFromArray(n2, normals, i);
    setFromArray(a3, positions, i + 0);
    if (exports_vec3.dot(n2, UP) < -0.6 && a3[1] < 0.48) {
      colorPattern[i + 0] = 4;
      colorPattern[i + 1] = 4;
      colorPattern[i + 2] = 4;
    }
  }
  let eyesPositions = createPyramidKernel();
  eyesPositions = tesselateSphere(eyesPositions);
  for (let i = eyesPositions.length / 3;i--; ) {
    setFromArray(p2, eyesPositions, i);
    exports_vec3.scale(p2, p2, 0.075);
    p2[0] += 0.705;
    p2[1] += 0.7;
    p2[2] += 0.13;
    setIntoArray(eyesPositions, i, p2);
  }
  const eyesBoneIndexes = [
    ...Array.from({ length: eyesPositions.length / 3 }, () => [
      bindPose.length - 2,
      0,
      0,
      0
    ]).flat(),
    ...Array.from({ length: eyesPositions.length / 3 }, () => [
      bindPose.length - 1,
      0,
      0,
      0
    ]).flat()
  ];
  const eyeColorPattern = Array.from({ length: eyesPositions.length / 3 }, (_, i) => i === 6 || i === 7 || i === 8 || i == 96 || i == 97 || i == 98 ? 6 : 5);
  eyeColorPattern.push(...eyeColorPattern);
  eyesPositions.push(...eyesPositions.map((x, i) => i % 3 === 2 ? x - 0.26 : x));
  const eyesNormals = getFlatShadingNormals(eyesPositions);
  return {
    positions: new Float32Array([...positions, ...eyesPositions]),
    normals: new Float32Array([...normals, ...eyesNormals]),
    colorPattern: new Uint8Array([...colorPattern, ...eyeColorPattern]),
    weights: new Float32Array([
      ...weights,
      ...eyesPositions.map(() => [1, 0, 0, 0]).flat()
    ]),
    boneIndexes: new Uint8Array([...boneIndexes, ...eyesBoneIndexes])
  };
};
var geometryPromise = createGeometry();

// node_modules/jurassic-nursery/packages/game/renderer/geometries/model/colorSchema.ts
var N_COLORS = 7;
var colorSchema = new Float32Array(3 * N_COLORS * MAX_TRICERATOPS);
var setEntityColorSchema = (i, colors) => {
  for (let k = colors.length;k--; )
    colorSchema[3 * N_COLORS * i + k] = colors[k];
};

// node_modules/jurassic-nursery/packages/game/utils/math.ts
var lerp5 = (weight, a1, a22) => (1 - weight) * a1 + weight * a22;
var invLerp = (a3, a1, a22) => (a3 - a1) / (a22 - a1);
var clamp = (value, min3, max3) => Math.min(Math.max(value, min3), max3);

// node_modules/jurassic-nursery/packages/game/systems/walker.ts
var V_MAX = 0.05;
var ALLOWED_ANGLE_MAX = Math.PI / 100;
var ALLOWED_ANGLE_MIN = Math.PI / 1e4;
var step = () => {
  for (const w of triceratops.values()) {
    if (w.dragged_anchor || !w.go_to_target)
      continue;
    const target = w.go_to_target;
    const desired_v = [target[0] - w.o[0], target[1] - w.o[2]];
    const d = exports_vec2.length(desired_v);
    if (d < 0.2) {
      w.go_to_target = undefined;
      w.velocity[0] = 0;
      w.velocity[1] = 0;
    } else {
      desired_v[0] /= d;
      desired_v[1] /= d;
      const direction3 = [1, 0, 0];
      exports_vec3.transformQuat(direction3, direction3, w.direction);
      direction3[1] = 0;
      exports_vec3.normalize(direction3, direction3);
      const desired_angle = Math.atan2(desired_v[1], desired_v[0]);
      const current_angle = Math.atan2(direction3[2], direction3[0]);
      let delta_angle = (desired_angle - current_angle + Math.PI * 4) % (Math.PI * 2);
      if (delta_angle > Math.PI)
        delta_angle -= Math.PI * 2;
      const current_v_l = exports_vec2.length(w.velocity);
      const allowed_angle_delta = lerp5(invLerp(current_v_l, 0, w.v_max), ALLOWED_ANGLE_MAX, ALLOWED_ANGLE_MIN);
      const da = delta_angle > 0 ? Math.min(delta_angle, allowed_angle_delta) : -Math.min(-delta_angle, allowed_angle_delta);
      w.delta_angle_mean = lerp5(0.08, w.delta_angle_mean, da / ALLOWED_ANGLE_MAX);
      const new_angle = current_angle + da;
      let u = 0;
      const m_delta_angle = Math.abs(delta_angle);
      if (m_delta_angle > Math.PI)
        u = 0;
      else {
        const a3 = m_delta_angle / clamp(d / 5, 0, 1);
        u = 1 - clamp(a3 / (Math.PI * 0.6), 0, 1);
      }
      let desired_v_l = lerp5(u, w.v_max * 0.2, w.v_max);
      const new_v_l = current_v_l > desired_v_l ? lerp5(0.08, current_v_l, desired_v_l) : lerp5(0.02, current_v_l, desired_v_l);
      w.velocity[0] = Math.cos(new_angle) * new_v_l;
      w.velocity[1] = Math.sin(new_angle) * new_v_l;
      w.o[0] += w.velocity[0] * w.size;
      w.o[2] += w.velocity[1] * w.size;
      exports_quat.fromEuler(w.direction, 0, -(new_angle / Math.PI) * 180, 0);
    }
  }
  for (const w1 of triceratops.values()) {
    if (w1.dragged_anchor)
      continue;
    for (const w2 of triceratops.values()) {
      if (w2.dragged_anchor)
        continue;
      if (w1 === w2)
        break;
      const v = [w1.o[0] - w2.o[0], w1.o[2] - w2.o[2]];
      const l = Math.hypot(v[0], v[1]);
      if (l < 2) {
        exports_vec3.set(a3, 1, 0, 0);
        exports_vec3.transformQuat(a3, a3, w1.direction);
        const dot1 = a3[0] * v[0] + a3[2] * v[1];
        const s1 = lerp5(Math.abs(dot1), 0.3, 0.66);
        exports_vec3.set(a3, 1, 0, 0);
        exports_vec3.transformQuat(a3, a3, w2.direction);
        const dot22 = a3[0] * v[0] + a3[2] * v[1];
        const s2 = lerp5(Math.abs(dot22), 0.3, 0.66);
        const penetration = Math.max(0, -(l - s1 - s2));
        const f = 0.04 * (1 - (1 - penetration) ** 3);
        w1.o[0] += v[0] / l * f;
        w1.o[2] += v[1] / l * f;
        w2.o[0] -= v[0] / l * f;
        w2.o[2] -= v[1] / l * f;
      }
    }
  }
};
var a3 = exports_vec3.create();

// node_modules/jurassic-nursery/packages/game/utils/color.ts
var hslToRgb = (out, h, s, l) => {
  const q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p2 = 2 * l - q2;
  out[0] = hue2rgb(p2, q2, h + 1 / 3);
  out[1] = hue2rgb(p2, q2, h);
  out[2] = hue2rgb(p2, q2, h - 1 / 3);
};
var hue2rgb = (p2, q2, t) => {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q2 - p2) * 6 * t;
  if (t < 1 / 2)
    return q2;
  if (t < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t) * 6;
  return p2;
};

// node_modules/jurassic-nursery/packages/game/systems/gene/index.ts
var variants = [
  [1, [0], undefined],
  [0, [0.1], undefined],
  [3, [0.41], undefined],
  [4, [0.1, 0.02], [0, 1]],
  [2, [0.41, 0.11], [1, 2]],
  [2, [0.75], [0, 4]],
  [3, [0.34], [2, 3]],
  [4, [0, 0.75], [0, 5]],
  [1, [0.75, 0.35], [5, 6]],
  [0, [0.49], [4, 8]],
  [2, [0.5, 0.1], [1, 9]],
  [3, [0.15], [7, 10]]
].map(([ediblePack, [h1, h2], variant_parents], i) => {
  const edible = new Set([ediblePack]);
  const colors = [];
  const out = [];
  hslToRgb(out, h1, 0.7, 0.61);
  colors.push(...out);
  hslToRgb(out, (h1 + 0.02) % 1, 0.73, 0.45);
  colors.push(...out);
  if (h2) {
    hslToRgb(out, h2, 0.7, 0.61);
    colors.push(...out);
    hslToRgb(out, (h2 + 0.02) % 1, 0.73, 0.45);
    colors.push(...out);
  } else {
    colors.push(...colors);
  }
  hslToRgb(out, (h1 + 0.1) % 1, 1, 0.89);
  colors.push(...out);
  colors.push(0.9, 0.9, 0.8, 0.4, 0.4, 0.5);
  return { edible, colors, variant_index: i, variant_parents };
});

// node_modules/jurassic-nursery/packages/game/renderer/canvas.ts
var canvas = document.getElementsByTagName("canvas")[0];
var gl = canvas.getContext("webgl2");
var dpr = Math.min(window.devicePixelRatio ?? 1, 2);
var onResize = () => {
  const w = window.innerWidth * dpr;
  const h = window.innerHeight * dpr;
  canvas.width = w;
  canvas.height = h;
  gl.viewport(0, 0, w, h);
};

// node_modules/jurassic-nursery/packages/game/entities/camera.ts
var lookAtPoint = [0, 0, 0];
var eye = [0, 0, 1];
var perspectiveMatrix = new Float32Array(4 * 4);
var lookAtMatrix = exports_mat4.create();
var worldMatrix = exports_mat4.create();
var updateLookAtMatrix = () => {
  exports_mat4.lookAt(lookAtMatrix, eye, lookAtPoint, UP);
  exports_mat4.multiply(worldMatrix, perspectiveMatrix, lookAtMatrix);
};
var onResize2 = () => {
  const fovX = Math.PI / 3;
  const near = 0.005;
  const far = 2000;
  const aspect = canvas.width / canvas.height;
  exports_mat4.perspective(perspectiveMatrix, fovX, aspect, near, far);
  updateLookAtMatrix();
};

// node_modules/jurassic-nursery/packages/game/ui/state.ts
var state = {
  t: 0,
  dragged: null
};

// node_modules/jurassic-nursery/packages/game/systems/walkerPose.ts
var updateWalkerPose = (w) => {
  if (w.dragged_anchor) {
    exports_quat.fromEuler(w.head_direction, 0, 0, -55 - Math.sin(state.t * 0.1) * 10);
    exports_quat.fromEuler(w.tail_direction, 0, 0, 30 + Math.sin(state.t * 0.1) * 5);
    w.feet[0] = 0.3;
    w.feet[1] = 0.3;
    w.feet[2] = -0.3;
    w.feet[3] = -0.3;
    return;
  }
  const v_l = exports_vec2.length(w.velocity) / V_MAX;
  w.tail_t += lerp5(v_l, 0.015, 0.12);
  w.feet_t += lerp5(1 - (1 - v_l) ** 3, 0, 0.12);
  const blobbing_A = lerp5(v_l, 5, 10);
  exports_quat.fromEuler(w.tail_direction, 0, lerp5(Math.abs(w.delta_angle_mean), Math.sin(w.tail_t) * blobbing_A * 0.5, w.delta_angle_mean * 30), lerp5(v_l, 4, 0) + Math.sin(w.feet_t * 2) * blobbing_A);
  exports_quat.fromEuler(w.head_direction, 0, lerp5(Math.abs(w.delta_angle_mean), Math.sin(w.tail_t) * blobbing_A * 0.5, -w.delta_angle_mean * 50), Math.sin(w.feet_t * 2) * blobbing_A * 0.8);
  const feet_A = Math.sqrt(lerp5(v_l, 0, 1));
  for (let k = 4;k--; ) {
    w.feet[k] = (f_saw(w.feet_t / Math.PI + k / 4) - 0.5) * 2 * feet_A;
  }
};
var f_saw = (x) => {
  const u = x % 1;
  if (u < 0.5)
    return u * 2;
  else
    return 1 - (u - 0.5) * 2;
};

// node_modules/jurassic-nursery/packages/game/controls/utils/getRayFromScreen.ts
var worldMatrixInv = exports_mat4.create();
var getRayFromScreen = (outOrigin, outDirection, x, y) => {
  exports_mat4.invert(worldMatrixInv, worldMatrix);
  exports_vec3.transformMat4(outDirection, [x, y, 0.5], worldMatrixInv);
  exports_vec3.sub(outDirection, outDirection, eye);
  exports_vec3.normalize(outDirection, outDirection);
  exports_vec3.copy(outOrigin, eye);
};

// node_modules/jurassic-nursery/packages/game/utils/collision/projectOnGround.ts
var projectOnGround = (out, ray_origin, ray_direction, y0 = 0) => {
  const t = (y0 - ray_origin[1]) / ray_direction[1];
  exports_vec3.scaleAndAdd(out, ray_origin, ray_direction, t);
};

// node_modules/jurassic-nursery/packages/game/renderer/utils/location.ts
var getAttribLocation = (gl2, program, name) => {
  const position = gl2.getAttribLocation(program, name);
  if (position === -1)
    console.warn(`Unable to localize ${name}.`);
  return position;
};
var getUniformLocation = (gl2, program, name) => {
  const position = gl2.getUniformLocation(program, name);
  if (position === -1)
    console.warn(`Unable to localize ${name}.`);
  return position;
};

// node_modules/jurassic-nursery/packages/game/renderer/utils/program.ts
var createProgram = (gl2, vertexShaderSource, fragmentShaderSource) => {
  const vertShader = initShader(gl2, vertexShaderSource, gl2.VERTEX_SHADER);
  const fragShader = initShader(gl2, fragmentShaderSource, gl2.FRAGMENT_SHADER);
  const shaderProgram = gl2.createProgram();
  gl2.attachShader(shaderProgram, vertShader);
  gl2.attachShader(shaderProgram, fragShader);
  gl2.linkProgram(shaderProgram);
  if (!gl2.getProgramParameter(shaderProgram, gl2.LINK_STATUS))
    throw "Unable to initialize the shader program.";
  return shaderProgram;
};
var initShader = (gl2, sourceCode, shaderType) => {
  const shader = gl2.createShader(shaderType);
  gl2.shaderSource(shader, sourceCode);
  gl2.compileShader(shader);
  if (!gl2.getShaderParameter(shader, gl2.COMPILE_STATUS))
    throw "An error occurred compiling the shaders: \n" + (gl2.getShaderInfoLog(shader) || "") + "\n" + sourceCode;
  return shader;
};

// node_modules/jurassic-nursery/packages/game/renderer/materials/skinnedMesh/shader.frag
var shader_default = "#version 300 es\nprecision highp float;\n\nin vec3 v_normal;\nin vec3 v_color;\n\n\nout vec4 outColor;\n\nvoid main() {\n\n  vec3 l = vec3(0.615457,0.492365 ,0.615457);\n\n\n  vec3 normal = normalize(v_normal);\n\n  float p = dot(normal, l) ;\n\n\n  \n  outColor.rgba = vec4( v_color, 1.0 );\n\n  outColor.rgb *= 0.6 + clamp(  p, -0.47, 10.0 ) * 0.45  ;\n  \n  // outColor.rgb = v_normal;\n  // outColor.rgb = vec3(0.615457,0.492365 ,0.615457);\n\n  \n}\n";

// node_modules/jurassic-nursery/packages/game/renderer/materials/skinnedMesh/shader.vert
var shader_default2 = "#version 300 es\nprecision highp float;\n\n// attributes\nin vec4 a_position;\nin vec4 a_normal;\nin mat4 a_colorSchema;\nin uint a_colorPattern;\nin vec4 a_weights;\nin uvec4 a_boneIndexes;\nin uint a_entityIndex;\n\n\n// uniforms\nuniform mat4 u_viewMatrix;\nuniform sampler2D u_boneMatrixTexture;\nuniform sampler2D u_colorSchemaTexture;\n\nout vec3 v_normal;\nout vec3 v_color;\n\n \n\nvoid main() {\n\n  int n = int(a_entityIndex);\n\n  mat4 bm0 = mat4(\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[0]) + 0, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[0]) + 1, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[0]) + 2, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[0]) + 3, n), 0)\n  );\n\n  mat4 bm1 = mat4(\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[1]) + 0, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[1]) + 1, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[1]) + 2, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[1]) + 3, n), 0)\n  );\n\n  mat4 bm2 = mat4(\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[2]) + 0, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[2]) + 1, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[2]) + 2, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[2]) + 3, n), 0)\n  );\n\n  mat4 bm3 = mat4(\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[3]) + 0, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[3]) + 1, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[3]) + 2, n), 0),\n    texelFetch(u_boneMatrixTexture, ivec2(4 * int(a_boneIndexes[3]) + 3, n), 0)\n  );\n\n\n  mat4 bm = \n    bm0 * a_weights[0] +\n    bm1 * a_weights[1] +\n    bm2 * a_weights[2] +\n    bm3 * a_weights[3] ;\n\n  gl_Position = u_viewMatrix * bm * a_position;\n  // gl_Position = u_viewMatrix  * a_position;\n\n  v_normal = mat3( bm) * vec3(a_normal);\n  // v_normal =  vec3(a_normal);\n\n\n  vec4 color = texelFetch(u_colorSchemaTexture, ivec2(a_colorPattern, n), 0);\n\n  v_color = color.xyz;\n}\n\n";

// node_modules/jurassic-nursery/packages/game/renderer/materials/skinnedMesh/index.ts
var program2 = createProgram(gl, shader_default2, shader_default);
var u_viewMatrix = gl.getUniformLocation(program2, "u_viewMatrix");
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);
var positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
var a_position = getAttribLocation(gl, program2, "a_position");
gl.enableVertexAttribArray(a_position);
gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);
var normalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
var a_normal = getAttribLocation(gl, program2, "a_normal");
gl.enableVertexAttribArray(a_normal);
gl.vertexAttribPointer(a_normal, 3, gl.FLOAT, false, 0, 0);
var colorPatternBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorPatternBuffer);
var a_colorPattern = getAttribLocation(gl, program2, "a_colorPattern");
gl.enableVertexAttribArray(a_colorPattern);
gl.vertexAttribIPointer(a_colorPattern, 1, gl.UNSIGNED_BYTE, 0, 0);
var weightsBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, weightsBuffer);
var a_weights = getAttribLocation(gl, program2, "a_weights");
gl.enableVertexAttribArray(a_weights);
gl.vertexAttribPointer(a_weights, 4, gl.FLOAT, false, 0, 0);
var boneIndexesBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, boneIndexesBuffer);
var a_boneIndexes = getAttribLocation(gl, program2, "a_boneIndexes");
gl.enableVertexAttribArray(a_boneIndexes);
gl.vertexAttribIPointer(a_boneIndexes, 4, gl.UNSIGNED_BYTE, 0, 0);
var entityIndexBuffer = gl.createBuffer();
var entityIndex = new Uint8Array(Array.from({ length: MAX_TRICERATOPS }, (_, i) => i));
gl.bindBuffer(gl.ARRAY_BUFFER, entityIndexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, entityIndex, gl.STATIC_DRAW);
var a_entityIndex = getAttribLocation(gl, program2, "a_entityIndex");
gl.enableVertexAttribArray(a_entityIndex);
gl.vertexAttribIPointer(a_entityIndex, 1, gl.UNSIGNED_BYTE, 0, 0);
gl.vertexAttribDivisor(a_entityIndex, 1);
var boneMatrixTexture = gl.createTexture();
var u_boneMatrixTexture = getUniformLocation(gl, program2, "u_boneMatrixTexture");
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, boneMatrixTexture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
var colorSchemaTexture = gl.createTexture();
var u_colorSchemaTexture = getUniformLocation(gl, program2, "u_colorSchemaTexture");
gl.activeTexture(gl.TEXTURE0 + 1);
gl.bindTexture(gl.TEXTURE_2D, colorSchemaTexture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.bindVertexArray(null);
var nVertices = 0;
var draw = () => {
  gl.useProgram(program2);
  gl.uniformMatrix4fv(u_viewMatrix, false, worldMatrix);
  update();
  gl.bindTexture(gl.TEXTURE_2D, boneMatrixTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, 4 * N_BONES, MAX_TRICERATOPS, 0, gl.RGBA, gl.FLOAT, bonesMatrices);
  gl.uniform1i(u_boneMatrixTexture, 0);
  gl.bindTexture(gl.TEXTURE_2D, colorSchemaTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB32F, N_COLORS, MAX_TRICERATOPS, 0, gl.RGB, gl.FLOAT, colorSchema);
  gl.uniform1i(u_colorSchemaTexture, 1);
  gl.bindVertexArray(vao);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.drawArraysInstanced(gl.TRIANGLES, 0, nVertices, triceratops.size);
  gl.bindVertexArray(null);
};
geometryPromise.then(({ positions, normals, colorPattern, weights, boneIndexes }) => {
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, colorPatternBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colorPattern, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, weightsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, weights, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, boneIndexesBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, boneIndexes, gl.STATIC_DRAW);
  nVertices = positions.length / 3;
});

// node_modules/jurassic-nursery/packages/game/entities/fruits.ts
var FRUIT_S = 0.7;
var fruits = new Map;
var FRUIT_Y = FRUIT_S * 0.32;
var MAX_FRUIT = 256;

// node_modules/jurassic-nursery/packages/game/entities/trees.ts
var MAX_TREE = 80;
var trees = new Map;

// node_modules/jurassic-nursery/packages/game/renderer/materials/shadow/shader.frag
var shader_default3 = "#version 300 es\nprecision highp float;\n\n\nin vec2 v_texcoord;\n\n\n\n\n\nout vec4 outColor;\n\nvoid main() {\n\n  vec2 a = vec2( 0.5 - v_texcoord.x, 0.5 - v_texcoord.y );\n\n  float l = length(a) * 1.84;\n\n  float o = (1.0-l*l*l) ;\n\n  outColor = vec4(0,0,0,o * 0.5  );\n\n}\n";

// node_modules/jurassic-nursery/packages/game/renderer/materials/shadow/shader.vert
var shader_default4 = "#version 300 es\nprecision highp float;\n\nuniform mat4 u_matrix;\n\n// attributes\nin vec4 a_position;\nin vec2 a_texcoord;\n\nout vec2 v_texcoord;\n\n\nvoid main() {\n\n\n  gl_Position = u_matrix * a_position;\n  v_texcoord = a_texcoord;\n\n}\n\n";

// node_modules/jurassic-nursery/packages/game/renderer/materials/shadow/index.ts
var MAX_SHADOW = MAX_FRUIT + MAX_TRICERATOPS + MAX_TREE;
var program4 = createProgram(gl, shader_default4, shader_default3);
var u_matrix = gl.getUniformLocation(program4, "u_matrix");
var vao2 = gl.createVertexArray();
gl.bindVertexArray(vao2);
var positions = new Float32Array(MAX_SHADOW * 3 * 3);
var positionBuffer2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
var a_position2 = getAttribLocation(gl, program4, "a_position");
gl.enableVertexAttribArray(a_position2);
gl.vertexAttribPointer(a_position2, 3, gl.FLOAT, false, 0, 0);
var texcoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Array.from({ length: MAX_SHADOW }, () => [0, 0, 2, 0, 0, 2]).flat()), gl.STATIC_DRAW);
var a_texcoord = getAttribLocation(gl, program4, "a_texcoord");
gl.enableVertexAttribArray(a_texcoord);
gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 0, 0);
gl.bindVertexArray(null);
var b2 = exports_vec3.create();
var n_triangles = 0;
var updatePositionBuffer = () => {
  let j = 0;
  for (const fruit of fruits.values()) {
    const { p: p2, size } = fruit;
    const l = size / 2;
    exports_vec3.set(b2, p2[0] - l, 0, p2[2] - l);
    setIntoArray(positions, j * 3 + 0, b2);
    exports_vec3.set(b2, p2[0] - l, 0, p2[2] + l * 3);
    setIntoArray(positions, j * 3 + 1, b2);
    exports_vec3.set(b2, p2[0] + l * 3, 0, p2[2] - l);
    setIntoArray(positions, j * 3 + 2, b2);
    j++;
  }
  for (const { position, radius } of trees.values()) {
    const l = radius * 0.7;
    exports_vec3.set(b2, position[0] - l, 0, position[1] - l);
    setIntoArray(positions, j * 3 + 0, b2);
    exports_vec3.set(b2, position[0] - l, 0, position[1] + l * 3);
    setIntoArray(positions, j * 3 + 1, b2);
    exports_vec3.set(b2, position[0] + l * 3, 0, position[1] - l);
    setIntoArray(positions, j * 3 + 2, b2);
    j++;
  }
  for (const tri of triceratops.values()) {
    const { o: origin, direction, size } = tri;
    const lx = 0.85 * size;
    const lz = 0.5 * size;
    exports_vec3.set(b2, -lx + 0.12, 0, -lz);
    exports_vec3.transformQuat(b2, b2, direction);
    b2[0] += origin[0];
    b2[2] += origin[2];
    setIntoArray(positions, j * 3 + 0, b2);
    exports_vec3.set(b2, -lx + 0.12, 0, lz * 3);
    exports_vec3.transformQuat(b2, b2, direction);
    b2[0] += origin[0];
    b2[2] += origin[2];
    setIntoArray(positions, j * 3 + 1, b2);
    exports_vec3.set(b2, lx * 3 + 0.12, 0, -lz);
    exports_vec3.transformQuat(b2, b2, direction);
    b2[0] += origin[0];
    b2[2] += origin[2];
    setIntoArray(positions, j * 3 + 2, b2);
    j++;
  }
  n_triangles = j;
};
var draw2 = () => {
  updatePositionBuffer();
  gl.useProgram(program4);
  gl.bindVertexArray(vao2);
  gl.uniformMatrix4fv(u_matrix, false, worldMatrix);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.disable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer2);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
  gl.drawArrays(gl.TRIANGLES, 0, n_triangles * 3);
  if (n_triangles < MAX_SHADOW)
    gl.bindVertexArray(null);
  gl.enable(gl.DEPTH_TEST);
  gl.disable(gl.BLEND);
};

// src/index.ts
eye[0] = 0;
eye[1] = 1.6;
eye[2] = 14;
updateLookAtMatrix();
gl.clearColor(0, 0, 0, 0);
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LESS);
var render = () => {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  draw2();
  draw();
};
var lineLength = 0;
var onResize3 = window.onresize = () => {
  onResize();
  onResize2();
  const o = exports_vec3.create();
  const v = exports_vec3.create();
  const h = exports_vec3.create();
  getRayFromScreen(o, v, 1, 0);
  projectOnGround(h, o, v, 0);
  lineLength = h[0];
  render();
};
onResize3();
{
  let _id = 1;
  for (let i = 5;i--; ) {
    const tri = {
      id: _id++,
      ...createSkeleton(),
      ...variants[0],
      food_level: 0,
      love_level: 0,
      happiness_level: 0,
      will_not_eat_again: new Set,
      wandering_center: [0, 0],
      velocity: exports_vec2.create(),
      delta_angle_mean: 0,
      tail_t: Math.random() * 3,
      feet_t: Math.random() * 3,
      v_max: V_MAX,
      seed: Math.floor(Math.random() * 100),
      activity: { type: "idle" }
    };
    tri.o[0] = -lineLength * 1.1;
    tri.o[0] += Math.random() - 0.5;
    tri.o[2] += Math.random() - 0.5;
    triceratops.set(tri.id, tri);
  }
  {
    let i = 0;
    for (const tri of triceratops.values()) {
      setEntityColorSchema(i, tri.colors);
      i++;
    }
  }
}
var loop = () => {
  step();
  let i = 0;
  for (const tri of triceratops.values()) {
    i++;
    if (!tri.go_to_target) {
      tri.go_to_target = [lineLength * (tri.o[0] > 0 ? -1 : 1) * 0.86, 0];
      tri.go_to_target[0] += (Math.random() - 0.5) * 1.5;
      tri.go_to_target[1] += (Math.random() - 0.5) * 1.5 + i;
    }
    updateWalkerPose(tri);
  }
  render();
  requestAnimationFrame(loop);
};
geometryPromise.then(loop);
