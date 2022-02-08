const ItemIndus = ({id, name, email, onDelete, onHire}) => {
    return (
        <div key={id} className="oneCard">
          <div className="personSpace">
            <div className="textData">
              <p className="textInCard">Имя: </p> {name}, <p className="textInCard">email: </p>{email}
            </div>
          </div>
          <div className="buttonsSpace">
            <button id = {id} onClick={onHire} className="hireButton">Нанять индуса</button>
            <button id = {id} onClick={onDelete} className="deleteButton">Удалить индуса</button>
          </div>
        </div>
    );
}

export default ItemIndus;