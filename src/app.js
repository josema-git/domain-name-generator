window.onload = function() {
  var domainName = document.querySelector("#domainName");
  console.log(domainName);
  let pronoun = ["the", "our", "my", "your", "his", "her"];
  let adj = ["great", "big", "small", "tiny", "cute", "ugly"];
  let noun = ["jogger", "racoon", "dog", "cat", "fish", "yacom"];
  let domain = [".com", ".net", ".us", ".io", ".es", ".co"];
  pronoun.forEach((pronounItem) =>{
    adj.forEach((adjItem) => {
      noun.forEach((nounItem) => {
        domain.forEach((domainItem) => {
          domainName.innerHTML += "<li>"+pronounItem+adjItem+nounItem+domainItem +"</li>";
        });
      });
    });
  });
}

