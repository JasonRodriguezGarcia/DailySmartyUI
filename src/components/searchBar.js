import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {

  handleFormSubmit = function({query}) {
    console.log('trying to handle submit for query >>', query);
    // navigate to a new route
  }

  renderInput(field) {
    return <input type="text" placeholder=
      'Search DailySmarty' {...field.input} />
  }

  render() {
    //this.props contiene todas las propiedades que se han
    // pasado al componente SearchBar. Mediante la desestructuración,
    // estamos obteniendo específicamente la función handleSubmit de this.props.
    const { handleSubmit } = this.props;
    return (
      <form  className="search-bar" onSubmit=
        {handleSubmit(this.handleFormSubmit.bind(this))}>

        <Field name="query" component={this.renderInput} />
        
      </form>
    )
  }
}
// El componente SearchBar se conecta con Redux Form
// usando la función reduxForm. Esto envuelve al componente
// SearchBar y le proporciona capacidades adicionales 
// relacionadas con la gestión del formulario.
SearchBar = reduxForm ({
  form: "searchBar"
}) (SearchBar)
export default SearchBar;
