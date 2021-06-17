function getArgumentsInfo(...args) {
    let argsCount = [];

    function getTypes() {
        let argTypes = args.reduce((str, arg) => {
            str += `${typeof arg}: ${arg}\n`;
            let type = argsCount.find(e => Object.keys(e)[0] === typeof arg);
            type
                ? type[typeof arg] += 1
                : argsCount.push({ [typeof arg]: Number(1) });
            return str;
        }, '');
        return argTypes.trim();
    }

    console.log(getTypes());
    argsCount = argsCount.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]).forEach(type => {
        console.log(`${Object.keys(type)[0]} = ${Object.values(type)[0]}`);
    });
}

getArgumentsInfo({ name: 'bob'}, 3.333, 9.999);