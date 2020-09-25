import React from "react";
import Fade from "@material-ui/core/Fade";
import settings from 'project/settings.yml'
import fields from "../../types/fields";
import {
  largeItemHeight,
  largeItemWidth,
  smallItemHeight,
  smallItemWidth
} from "../../utils/landscapeCalculations";

const LargeItem = (({ item, onSelectItem, isMember }) => {
  //const relationInfo = fields.relation.values.find(({ id }) => id === item.relation);
  const color = 'rgb(24,54,114)';
  const label = item.name;
  const textHeight = isMember ? 0 : 10
  const padding = 2

  return <div style={{
    cursor: 'pointer',
    position: 'relative',
    background: color,
    visibility: item.isVisible ? 'visible' : 'hidden'}}
              onClick={ () => onSelectItem(item.id)}
  >
    <img loading="lazy" src={item.href} style={{
      width: largeItemWidth,
      height: largeItemHeight,
      padding: '5px 5px 10px 5px',
      margin: `${padding}px`,
    }} data-href={item.id} alt={item.name} />
    <div style={{position: 'absolute', bottom: 0, width: '100%', height: textHeight + padding, textAlign: 'center', verticalAlign: 'middle', background: color, color: 'white', fontSize: 6.7, lineHeight: '13px'}}>
      {label}
    </div>
  </div>;
})

const SmallItem = (({ item, onSelectItem }) => {
  const isMember = item.category === settings.global.membership;
  return <img style={{
    cursor: 'pointer',
    width: smallItemWidth,
    height: smallItemHeight,
    border: `1px solid ${isMember ? 'white' : 'grey'}`,
    borderRadius: 2,
    padding: 1,
    visibility: item.isVisible ? 'visible' : 'hidden'
  }}
              data-href={item.id}
              loading="lazy"
              src={item.href}
              onClick={() => onSelectItem(item.id)}
              alt={item.name}
  />

})

export default props => {
  const { isLarge, isVisible, oss } = props.item
  const isMember = false;

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return <Fade timeout={1000} in={isVisible}>
    <div className={isMember || oss ? 'oss' : 'nonoss'} style={style}>
      <LargeItem {...props} isMember={isMember} />
    </div>
  </Fade>
}
