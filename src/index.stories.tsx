import React, { useState, FC } from 'react'
import shuffle from './helpers/shuffle'
import { InternalItem, CaptionComponent } from './types'
import { Gallery, Item, useGallery } from '.'
import 'photoswipe/dist/photoswipe.css'

export default { title: 'Gallery' }

const createItem = (index: number): InternalItem => ({
  original: `https://placekitten.com/1024/768?image=${index}`,
  thumbnail: `https://placekitten.com/160/120?image=${index}`,
  width: 1024,
  height: 768,
  title: `kitty #${index}`,
  alt: `photo of kitty #${index}`,
})

const items = Array.from({ length: 3 }, (_, i) => createItem(i + 1))

const ImageItem: FC<InternalItem> = ({
  original,
  thumbnail,
  width,
  height,
  title,
  id,
}) => {
  const [fullTitle, setFullTitle] = useState(title)
  return (
    <Item
      original={original}
      thumbnail={thumbnail}
      width={width}
      height={height}
      title={fullTitle}
      id={id}
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img
            onClick={open}
            src={thumbnail}
            ref={ref as React.MutableRefObject<HTMLImageElement>}
            style={{ display: 'block', cursor: 'pointer', marginBottom: 5 }}
          />
          <input
            type="text"
            value={fullTitle}
            onChange={(e) => setFullTitle(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>
      )}
    </Item>
  )
}

export const simple = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }
  return (
    <Gallery id="simple-gallery">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 171px 171px',
          gridTemplateRows: '114px 114px',
          gridGap: 12,
        }}
      >
        <Item
          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          alt="Photo of seashore by Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          width="1600"
          height="1068"
          title="Author: Samuel Rohl"
          alt="Photo of mountain lake by Samuel Rohl"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          width="1600"
          height="1066"
          title="Author: Ales Krivec"
          alt="Photo of fog in the village by Ales Krivec"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          width="1600"
          height="1066"
          title="Author: Michael Hull"
          alt="Photo of river sunset by Michael Hull"
        >
          {({ ref, open }) => (
            <img
              style={{ ...smallItemStyles, gridColumnStart: 2 }}
              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          width="1600"
          height="1066"
          title="Author: Thomas Lefebvre"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}

export const cropped = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '150px',
    height: '150px',
  }
  return (
    <Gallery id="simple-gallery">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0fr)',
          gridGap: 10,
        }}
      >
        <Item
          cropped
          original="https://source.unsplash.com/IXP_xjMntlc/1920x2879"
          thumbnail="https://source.unsplash.com/IXP_xjMntlc/640x959"
          width="1920"
          height="2879"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://source.unsplash.com/IXP_xjMntlc/640x959"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          width="1600"
          height="1068"
          title="Author: Samuel Rohl"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          width="1600"
          height="1066"
          title="Author: Ales Krivec"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          width="1600"
          height="1066"
          title="Author: Michael Hull"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          cropped
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          width="1600"
          height="1066"
          title="Author: Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}

export const withSrcset = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }
  return (
    <Gallery id="simple-gallery">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 171px 171px',
          gridTemplateRows: '114px 114px',
          gridGap: 12,
        }}
      >
        <Item
          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          originalSrcset="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg 1600w, https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg 240w, https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          originalSrcset="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg 1600w, https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg 240w, https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          width="1600"
          height="1068"
          title="Author: Samuel Rohl"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          originalSrcset="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg 1600w, https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg 240w, https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          width="1600"
          height="1066"
          title="Author: Ales Krivec"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          originalSrcset="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg 1600w, https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg 240w, https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          width="1600"
          height="1066"
          title="Author: Michael Hull"
        >
          {({ ref, open }) => (
            <img
              style={{ ...smallItemStyles, gridColumnStart: 2 }}
              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          originalSrcset="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg 1600w, https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg 240w, https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          width="1600"
          height="1066"
          title="Author: Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}

const Kittens = ({ currentItem }) => {
  const [photos, setPhotos] = useState(items)

  const { open } = useGallery()

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <button type="button" onClick={() => open(currentItem)}>
          {`Show kitty #${currentItem + 1}`}
        </button>
        <button
          type="button"
          onClick={() => setPhotos([createItem(photos.length + 1), ...photos])}
        >
          Add
        </button>
        <button type="button" onClick={() => setPhotos(photos.slice(1))}>
          Remove
        </button>
        <button
          type="button"
          onClick={() => setPhotos([photos[1], photos[0], ...photos.slice(2)])}
        >
          Swap first two
        </button>
        <button
          type="button"
          onClick={() =>
            setPhotos([
              ...photos.slice(0, photos.length - 2),
              photos[photos.length - 1],
              photos[photos.length - 2],
            ])
          }
        >
          Swap last two
        </button>
        <button type="button" onClick={() => setPhotos([...shuffle(photos)])}>
          Shuffle
        </button>
      </div>
      {photos.map((props) => (
        <ImageItem {...props} key={props.original} />
      ))}
    </>
  )
}

export const playground = (args) => {
  return (
    <Gallery>
      <Kittens {...args} />
    </Gallery>
  )
}

playground.args = {
  currentItem: 0,
}

export const withoutImages = () => {
  const [links, setLinks] = useState(items)

  return (
    <Gallery options={{ getThumbBoundsFn: undefined, showHideOpacity: true }}>
      <div style={{ marginBottom: 20 }}>
        <button
          type="button"
          onClick={() => setLinks([createItem(links.length + 1), ...links])}
        >
          Add
        </button>
        <button type="button" onClick={() => setLinks(links.slice(1))}>
          Remove
        </button>
        <button
          type="button"
          onClick={() => setLinks([links[1], links[0], ...links.slice(2)])}
        >
          Swap first two
        </button>
        <button
          type="button"
          onClick={() =>
            setLinks([
              ...links.slice(0, links.length - 2),
              links[links.length - 1],
              links[links.length - 2],
            ])
          }
        >
          Swap last two
        </button>
        <button type="button" onClick={() => setLinks([...shuffle(links)])}>
          Shuffle
        </button>
      </div>

      <ul>
        {links.map((props) => (
          <Item {...props} key={props.original}>
            {({ ref, open }) => (
              <li ref={ref as React.MutableRefObject<HTMLLIElement>}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    open(e)
                  }}
                >
                  {props.title}
                </a>
              </li>
            )}
          </Item>
        ))}
      </ul>
    </Gallery>
  )
}

export const withHtml = () => {
  const html = `
  <div style="
    color: white;
    display: flex;
    place-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
  ">
    <h1 style="font-weight: normal;">😿</h1>
    There are no kittens :(
  </div>
  `
  return (
    <Gallery options={{ getThumbBoundsFn: undefined, showHideOpacity: true }}>
      <Item html={html}>
        {({ open }) => (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              open(e)
            }}
          >
            Open
          </a>
        )}
      </Item>
    </Gallery>
  )
}

const Caption: CaptionComponent = ({ photoswipe }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '6px',
        padding: '4px 10px',
        background: 'hsla(0, 0%, 100%, 0.7)',
        color: 'hsla(0, 0%, 0%, 0.8)',
      }}
    >
      <h4
        style={{
          margin: '0',
          marginBottom: '10px',
        }}
      >
        Custom caption
      </h4>
      <p
        style={{
          margin: '0',
        }}
      >
        Current slide number is {photoswipe.currIndex + 1}
      </p>
    </div>
  )
}

export const withCaption = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }
  return (
    <Gallery id="simple-gallery" caption={Caption}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 171px 171px',
          gridTemplateRows: '114px 114px',
          gridGap: 12,
        }}
      >
        <Item
          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          alt="Photo of seashore by Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
          width="1600"
          height="1068"
          title="Author: Samuel Rohl"
          alt="Photo of mountain lake by Samuel Rohl"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
          width="1600"
          height="1066"
          title="Author: Ales Krivec"
          alt="Photo of fog in the village by Ales Krivec"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
          width="1600"
          height="1066"
          title="Author: Michael Hull"
          alt="Photo of river sunset by Michael Hull"
        >
          {({ ref, open }) => (
            <img
              style={{ ...smallItemStyles, gridColumnStart: 2 }}
              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
          width="1600"
          height="1066"
          title="Author: Thomas Lefebvre"
          alt="Photo of bear by Thomas Lefebvre"
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </div>
    </Gallery>
  )
}
