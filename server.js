function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const myVar = process.env.SOME_VARIABLE;

    console.log('Containers rule!');
    console.log(`My own variable is: ${myVar}`)
    await sleep(5000);
  }
}

main();
