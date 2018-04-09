import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPrivateKey, getPublicKey, generateHash } from './loginActions';
import If from '../utils/if';


const Login = (props) => {
  const {
    error,
  } = props;

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Dados de acesso</legend>
        <If test={error}>
          <p className="form__error">{error}</p>
        </If>
        <label htmlFor="private_key" className="form__label">
          <input type="text" id="private_key" className="form__input" name="private_key" placeholder="private_key" onBlur={props.getPrivateKey} />
        </label>
        <label htmlFor="public_key" className="form__label">
          <input type="text" id="public_key" className="form__input" name="public_key" placeholder="public_key" onBlur={props.getPublicKey} />
        </label>
        <button className="form__btn btn-main" onClick={props.generateHash}><span>Acessar</span></button>
      </fieldset>
    </form>
  );
};

const mapStateToProps = state => ({ error: state.login.error });

const mapDispatchToProps = dispatch => bindActionCreators({
  getPrivateKey,
  getPublicKey,
  generateHash,
}, dispatch);

Login.propTypes = {
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

