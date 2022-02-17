doSomethingVeryCool = (coolParameter) => {
    const coolThing = coolParameter || "This is not so cool"
    console.log(coolThing);
 }
 doSomethingVeryCool("This is super cool")
 // Result: "This is super cool"
 doSomethingVeryCool()
 // Result: "This is not so cool"