var USER = {
  permissions: ["read", "create"]
};

function can(permission) {
  return function(target, key, descriptor) {
      const origFn = descriptor.value.bind(target);
      descriptor.value = function(...args){
        if(!USER.permissions.includes(permission)){
            return console.error(`You do not have ${permission} permission`);
        }
        return origFn(...args);
      }
      return descriptor;
  };
}

const names = {
  _names: new Set(),
  @can("read")
  get() {
    return Array.from(this._names);
  },
  @can("create")
  add(name) {
    this._names.add(name);
    return this.get();
  },
  @can("remove")
  remove(name) {
    this._names.delete(name);
    return this.get();
  }
};

USER.permissions.push("remove");

console.log(names.get());
console.log(names.add("john"));
console.log(names.add("doe"));
console.log(names.remove("doe"));