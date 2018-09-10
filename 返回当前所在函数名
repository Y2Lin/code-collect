function where() {
  return where.caller.name
}

const where = () => {
  let reg = /\s+at\s(\S+)\s\(/g
  let str = new Error().stack.toString()
  let res = reg.exec(str)
  return res && res[1]
}
