import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
//HOC to use DOM history
import { withRouter } from 'react-router-dom'; 

class SearchBar extends Component {

  handleFormSubmit = function({query}) {
    this.props.onSubmit(query);
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
// requerido por reduxForm
SearchBar = reduxForm ({
  form: "searchBar"
}) (SearchBar)

SearchBar = withRouter(SearchBar);
export default SearchBar;
