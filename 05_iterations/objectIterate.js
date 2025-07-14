const myObject = {
    'CPP': 'C++',
    'RP': 'RUBY',
    'PY': 'PYTHON',
    'JAVA': 'JAVA'
}

for (const key in myObject) { //forin loop.
     //console.log(key); // Print key
     console.log(myObject[key]); // Print value
}