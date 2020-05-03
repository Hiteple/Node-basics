// hello-world.cc

// TO USE THIS:
// 1. run 'node-gyp configure' on the native folder
// That will use binding.gyp file to create the module in a 'build' folder
// 2. In the same folder, run 'node-gyp build' to obtain the release folder from the makefile
// The addon.node file is the required one in CommonJS format
#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "world", NewStringType::kNormal).ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo
