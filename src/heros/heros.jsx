import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadHeros } from './herosActions'
import moment from 'moment'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadHeros()
  }

  renderHerosList() {
    let heros = this.props.heros;

    return (
      <ul className="heros__list">
        <li className="heros__list__item">
          <span className="heros__list__item__name">Nome</span>
          <span className="heros__list__item__description">Descrição</span>
          <span className="heros__list__item__update">Última atualização</span>
        </li>
        {
          heros.map((hero, key) => {
            return (
              <li className="heros__list__item" key={key}>
                <Link to={`/characters/${hero.id}`}>
                  <span className="heros__list__item__name">{hero.name}</span>
                  <span className="heros__list__item__description">{hero.description || '---'}</span>
                  <span className="heros__list__item__update">{moment(hero.modified).format('DD/MM/YYYY')}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="heros">
        <h1 className="heros__title">Heróis</h1>
        {this.renderHerosList()}
        <nav className="heros__nav">
          <a 
            onClick={() => this.props.loadHeros('prev')}
            className="heros__nav__prev"
            style={{display: (this.props.offset < this.props.limit ? 'none' : 'inline-block')}} >&larr; Anterior</a>

          <a
            onClick={() => this.props.loadHeros('next')}
            className="heros__nav__next"
            style={{display: (this.props.offset >= (this.props.total - this.props.limit) ? 'none' : 'inline-block')}} >Próximo &rarr;</a>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heros: state.heros.heros,
  limit: state.heros.limit,
  offset: state.heros.offset,
  total: state.heros.total
})
const mapDispatchToProps = dispatch => bindActionCreators({
  loadHeros
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)