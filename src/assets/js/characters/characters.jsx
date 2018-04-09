import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { loadCharacters } from './charactersActions';


class Characters extends Component {
  componentWillMount() {
    this.props.loadCharacters();
  }

  renderHerosList() {
    const { characters } = this.props;

    return (
      <ul className="heros__list">
        <li className="heros__list__item">
          <span className="heros__list__item__name">Nome</span>
          <span className="heros__list__item__description">Descrição</span>
          <span className="heros__list__item__update">Última atualização</span>
        </li>
        {
          characters.map(hero => (
            <li className="heros__list__item" key={hero.id}>
              <Link to={`/hero/${hero.id}`}>
                <span className="heros__list__item__name">{hero.name}</span>
                <span className="heros__list__item__description">{hero.description || '---'}</span>
                <span className="heros__list__item__update">{moment(hero.modified).format('DD/MM/YYYY')}</span>
              </Link>
            </li>
            ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="heros">
        <h1 className="heros__title">Heróis</h1>
        {this.renderHerosList()}
        <nav className="heros__nav">
          <button
            onClick={() => this.props.loadCharacters('prev')}
            className="heros__nav__prev"
            style={{ display: (this.props.offset < this.props.limit ? 'none' : 'inline-block') }}
          >&larr; Anterior
          </button>

          <button
            onClick={() => this.props.loadCharacters('next')}
            className="heros__nav__next"
            style={{ display: (this.props.offset >= (this.props.total - this.props.limit) ? 'none' : 'inline-block') }}
          >Próximo &rarr;
          </button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  limit: state.characters.limit,
  offset: state.characters.offset,
  total: state.characters.total,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadCharacters,
}, dispatch);

Characters.propTypes = {
  loadCharacters: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);

