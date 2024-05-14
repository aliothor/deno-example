const tree = {
  "a": [
    {
      name: "test",
    },
  ],
  "b": [
    {
      name: "test2",
    },
  ],
};


Object.values(tree).forEach(i=>{
    console.log(i.length);
    
})