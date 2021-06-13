const prom1 = Promise.resolve("1")
const prom2 = Promise.resolve("2")
const prom3 = Promise.resolve("3")
const prom4 = Promise.resolve("4")
const prom5 = Promise.resolve("5")
const prom6 = Promise.reject("nope");

(async ()=> {
  try{

    const res = await Promise.all([prom1, prom2, prom3, prom4, prom5, prom6]);
    console.log(res);
  }catch(err){
    console.error(err)
  }
})();