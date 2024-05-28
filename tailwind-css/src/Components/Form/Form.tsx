export const Form = () => {
  return (
    <div>
      <form action="" className="bg-white w-80 mx-auto mt-8 rounded-lg p-6    border-2 border-blue-500">
        <input
          type="text"
          className="border border-gray-300 w-full px-12 py-2 mb-4 rounded-md disabled:bg-red-200 focus:ring-2 focus:outline-none focus:ring-azul-claro/45     invalid:focus:ring-red-500"
          placeholder="Nombre"
          id=""
        />

        <input
          type="email"
          className="  peer border border-gray-300 w-full px-12 py-2  rounded-md focus:ring-2 focus:outline-none  focus:ring-azul-claro/45     invalid:focus:ring-red-500"
          placeholder="Correo"
          id=""
        />
        <p className=" text-red-400 peer-invalid:block hidden">
          El Correo es incorrecto
        </p>
        <input
          type="password"
          className="border border-gray-300 w-full px-12 py-2 mt-4 mb-4 rounded-md focus:ring-2 focus:outline-none focus:ring-azul-claro/45     invalid:focus:ring-red-500"
          placeholder="Contraseña"
          id=""
        />

        <button className="bg-azul-claro w-full text-white py-2 rounded-lg  cursor-pointer hover:bg-azul-oscuro">
          Ingresar
        </button>
      </form>
    </div>
  );
};
