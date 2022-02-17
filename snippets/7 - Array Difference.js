const arrayDiff = (array1, array2) => {
    const setArray = new Set(array2);
    return array1.filter(arr => !setArray.has(arr));
  };

  var heroes = ['Batman','Flash','Superman','Wolverine']
  var justiceLeaque = arrayDiff(heroes, ['Wolverine']);

  console.log(justiceLeaque);

  Output -->
  [ 'Batman', 'Flash', 'Superman' ]