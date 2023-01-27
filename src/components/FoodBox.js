import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {
  return (
    <div>
      <Row>
        <Col>
          {props.food.map((item) => {
            return (
              <>
                <p>{item.name}</p>
                <img src={item.image} height="150px" />
                <p>Calories: {item.calories}</p>
                <p>
                  Servings: <b> {item.servings}</b>
                </p>
                <p>
                  <b>Total Calories: {item.calories * item.servings}</b> kcal
                </p>
                <Button onClick={() => props.handleDeleteFood(item.name)}>
                  Delete
                </Button>
                <Divider></Divider>
              </>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default FoodBox;