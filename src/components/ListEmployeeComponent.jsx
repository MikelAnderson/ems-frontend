import React from "react";

function ListEmployeeComponent() {
  return (
    <>
      <table class="table table-light">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">E-mail</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button className="btn btn-primary mx-2">update</button><button className="btn btn-primary">delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ListEmployeeComponent;
