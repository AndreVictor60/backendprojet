module.exports.logErrors = (err) => {
    let errors = { hash: "" };
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("hash"))
      errors.hash = "Ce moment est déjà enregistré dans les logs.";
  
    return errors;
  };
  