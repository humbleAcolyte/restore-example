const compose =
  (...functions) =>
  (comp) => {
    return functions.reduceRight((prevRes, f) => f(prevRes), comp);
  };

export default compose;
