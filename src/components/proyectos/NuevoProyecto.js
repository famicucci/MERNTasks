import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
	// Obtener el State del formulario
	const proyectosContext = useContext(proyectoContext);

	const { formulario } = proyectosContext;

	// State para proyecto
	const [proyecto, guardarProyecto] = useState({
		nombre: '',
	});

	const { nombre } = proyecto;

	const onChangeProyecto = (e) => {
		guardarProyecto({
			...proyecto,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitProyecto = (e) => {
		e.preventDefault();

		// Validar

		// Agregar al State

		// Reiniciar el form
	};

	return (
		<Fragment>
			<button type="button" className="btn btn-block btn-primario">
				Nuevo Proyecto
			</button>
			{formulario ? (
				<form className="fomulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Proyecto"
						name="nombre"
						value={nombre}
						onChange={onChangeProyecto}
					/>

					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Agregar Proyecto"
					/>
				</form>
			) : null}
		</Fragment>
	);
};

export default NuevoProyecto;
