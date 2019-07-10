'use strict';

const { leftJoin, leftJoinObj } = require('../left-join.js');

describe('left-join.js', () => {
  it('can join two maps', () => {
    let synHashMap = new Map([
      ['hot', 'spicy'],
      ['chill', 'cool'],
      ['sweet', 'sugary'],
      ['savory', 'earthy'],
      ['salty', 'seawater']
    ]);
    let antHashMap = new Map([
      ['hot', 'cold'],
      ['chill', 'fever'],
      ['cake', 'celery'],
      ['savory', 'bland'],
      ['salty', 'sweet']
    ]);
    expect(leftJoin(synHashMap, antHashMap)).toEqual([
      ['hot', 'spicy', 'cold'],
      ['chill', 'cool', 'fever'],
      ['sweet', 'sugary', null],
      ['savory', 'earthy', 'bland'],
      ['salty', 'seawater', 'sweet'],
    ]);

    let stringSyn = {
      hot:  'spicy',
      chill: 'cool',
      sweet: 'sugary',
      savory: 'earthy',
      salty: 'seawater'
    };

    let stringAnt = {
      hot: 'cold',
      chill: 'fever',
      cake: 'celery',
      savory: 'bland',
      salty: 'sweet'
    };

    expect(leftJoinObj(stringSyn, stringAnt)).toEqual([
      ['hot', 'spicy', 'cold'],
      ['chill', 'cool', 'fever'],
      ['sweet', 'sugary', null],
      ['savory', 'earthy', 'bland'],
      ['salty', 'seawater', 'sweet'],
    ]);
  });

  it('returns an array of ALL keys from the LEFT', () => {
    let synHashMap = new Map([
      ['hot', 'cold'],
      ['chill', 'fever'],
      ['cake', 'celery'],
      ['savory', 'bland'],
      ['salty', 'sweet']
    ]);
    let antHashMap = new Map([
      ['sea', 'land'],
      ['yacht', 'truck'],
    ]);

    expect(leftJoin(synHashMap, antHashMap).length).toBe(5);

    let stringSyn = {
      hot:  'spicy',
      chill: 'cool',
      sweet: 'sugary',
      savory: 'earthy',
      salty: 'seawater'
    };

    let stringAnt = {
      sea: 'land',
      yacht: 'truck',
    };

    expect(leftJoinObj(stringSyn, stringAnt).length).toBe(5);
  });

  it(' if key exists only in left map, appends null to output arrays', () =>{
    let synHashMap = new Map([
      ['hot', 'cold'],
      ['chill', 'fever'],
      ['cake', 'celery'],
      ['savory', 'bland'],
      ['salty', 'sweet']
    ]);

    let antHashMap = new Map([
      ['sea', 'land'],
      ['yacht', 'truck'],
    ]);
    
    expect(leftJoin(synHashMap, antHashMap)).toEqual([
      ['hot', 'cold', null],
      ['chill', 'fever', null],
      ['cake', 'celery', null],
      ['savory', 'bland', null],
      ['salty', 'sweet', null]
    ]);
  });

  let stringSyn = {
    hot:  'spicy',
    chill: 'cool',
    sweet: 'sugary',
    savory: 'earthy',
    salty: 'seawater'
  };

  let stringAnt = {
    sea: 'land',
    yacht: 'truck',
  };

  expect(leftJoinObj(stringSyn, stringAnt)).toEqual([
    ['hot', 'spicy', null],
    ['chill', 'cool', null],
    ['sweet', 'sugary', null],
    ['savory', 'earthy', null],
    ['salty', 'seawater', null]
  ]);
});