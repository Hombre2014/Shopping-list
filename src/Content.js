import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <>
      {items.length > 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>You have no items in your list.</p>
      )}
    </>
  )
}

export default Content;
