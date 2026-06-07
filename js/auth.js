function registrar(){

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = {

        nombre:
        document.getElementById("nombre").value,

        correo:
        document.getElementById("correo").value,

        password:
        document.getElementById("password").value

    };

    usuarios.push(usuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Usuario registrado correctamente");

    window.location.href = "login.html";
}

function login(){

    let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    const correo =
    document.getElementById("correo").value;

    const password =
    document.getElementById("password").value;

    const usuario = usuarios.find(u =>
        u.correo === correo &&
        u.password === password
    );

    if(usuario){

        localStorage.setItem(
            "sesion",
            JSON.stringify(usuario)
        );

        alert("Bienvenido " + usuario.nombre);

        window.location.href = "index.html";

    }else{

        alert("Correo o contraseña incorrectos");

    }
}