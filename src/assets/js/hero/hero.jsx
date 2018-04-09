import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { loadHero, loadComics } from './heroActions';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingHero: true,
      loadingComics: true,
    };
  }

  componentWillMount() {
    this.props.loadHero(this.props.params.id);
    this.props.loadComics(this.props.params.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.hero.id !== nextState.hero.id) {
      this.setState({
        loadingHero: false,
      });
      return true;
    }

    if (nextProps.comics.length !== nextState.comics.length) {
      this.setState({
        loadingHero: false,
      });
      return true;
    }

    return false;
  }

  render() {
    const { hero, comics } = this.props;

    return (
      <div className="hero">
        {
          (!this.state.loadingHero || !this.state.loadingComics) ? (
            <div>
              <div className="hero__infos">
                <div className="hero__img">
                  <img src={hero.thumbnail ? `${hero.thumbnail.path}.${hero.thumbnail.extension}` : ''} alt={hero.name} />
                </div>
                <h1 className="hero__name">{hero.name}</h1>
                <p className="hero__description">{hero.description || ''}</p>
                <button onClick={hashHistory.goBack} className="hero__back-btn btn-main"><span>Voltar</span></button>
              </div>

              <div className="comics">
                <h2 className="comics__title">Fascículos</h2>
                {
                  comics.length ? (comics.map(comic => (
                    <div className="comics__item" key={comic.id}>
                      <div className="comics__cover">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                      </div>
                      <div className="comics__infos">
                        <h3 className="comics__infos__name">{comic.title}</h3>
                        <p className="comics__infos__number">número: {comic.id}</p>
                        <p className="comics__infos__description">{comic.description}</p>
                      </div>
                    </div>
                    ))) : <p>Nenhum fascículo encontrado</p>
                }
              </div>
            </div>
          ) : <div className="spinner" />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hero: state.hero.hero,
  comics: state.hero.comics,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadHero,
  loadComics,
}, dispatch);

Hero.propTypes = {
  loadHero: PropTypes.func.isRequired,
  loadComics: PropTypes.func.isRequired,
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  comics: PropTypes.arrayOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Hero);

