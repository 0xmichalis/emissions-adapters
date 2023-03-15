const MODIFIED = parse(process.env.MODIFIED);
const ADDED = parse(process.env.ADDED);
const fileSet = new Set();

[...MODIFIED, ...ADDED].forEach(file => {
  const [root, dir] = file.split("/");
  if (root === "protocols") fileSet.add(root + "/" + dir);
});

console.log(JSON.stringify([...fileSet]));

function parse(data) {
  return data.replace("[", "").replace("]", "").split(",");
}
