// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({DomParticle}) => {

  let host = `favorite-restaurant`;
  let template = `

<style>
  [${host}] {
    padding: 6px 0;
    text-align: center;
  }
  [${host}] > * {
    vertical-align: middle;
    padding: 6px 0;
  }
</style>

<div ${host} id={{subId}}>{{aFavoriteRestaurant}}</div>

<template someones-favorite-restaurant>
  <span hidden="{{hideFavorites}}">
    <i class="material-icons" title="This is one of your favorite restaurants!" on-click="_onClickFavorite" key="{{identifier}}">favorite</i>
  </span>
  <span hidden="{{hideUnfavorites}}">
    <i class="material-icons" title="Not a favorite" on-click="_onClickUnfavorite" key="{{identifier}}">favorite_border</i>
  </span>
</template>

    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _shouldRender(props) {
      return props.restaurants && props.favorites;
    }
    _render(props, state) {
      const favoriteNames = props.favorites.map(favorite => favorite.name);
      const items = props.restaurants.map(restaurant => this._renderFavorites(restaurant, favoriteNames))
      return { items };
    }
    _renderFavorites(restaurant, favoriteNames) {
      const isFavorite = favoriteNames.includes(restaurant.name);

      return {
        subId: restaurant.id,
        aFavoriteRestaurant: {
          $template: 'someones-favorite-restaurant',
          models: [{hideUnfavorites: isFavorite, hideFavorites: !isFavorite, name: restaurant.name, identifier: restaurant.identifier}]
        }
      };
    }
    _onClickFavorite(e, state, views) {
      var favorites = views.get('favorites');
      var key = e.data.key;

      views.get('favorites').toList().then(favoritesList => {
        let toRemoves = favoritesList.filter(elem => elem.rawData.placesId == key);
        toRemoves.forEach(toRemove => favorites.remove(toRemove));
      });
    }
    _onClickUnfavorite(e, state, views) {
      var key = e.data.key;
      var favorites = views.get('favorites');
      views.get('restaurants').toList().then(restaurantsList => {
        restaurantsList.filter(r => r.identifier == key).forEach(restaurant => {
          favorites.store(new favorites.entityClass({
            placesId: restaurant.identifier,
            name: restaurant.name,
            address: restaurant.address
          }));
        });
      });
    }
  };
});
