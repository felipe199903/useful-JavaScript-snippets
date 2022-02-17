const setDefaultObject = (obj, ...defs) =>
         Object.assign({}, obj, ...defs.reverse(), obj);

setDefaultObject({ hero: 'Batman' }, { villain: 'Joker' });