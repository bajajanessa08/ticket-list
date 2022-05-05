import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
    Button, Typography, CardContent,
    CardMedia, Card, Container, Grid,
    Modal
} from '@material-ui/core';
import LabelRequired from '../common/LabelRequired';
import { FlashAutoRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  }
});

function App() {

  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState<any>(false);
  const [index, setIndex] = useState<any>();
//   const [listOfProducts, setListOfProducts] = useState<any>([]);
  const [addProduct, setAddProduct] = useState<any>({});
  useEffect(() => {
        setData([
            { product: 'water', type: 'drinks', quantity: 10, unitPrice: 1 },
            { product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5 },
            { product: 'steak', type: 'food', quantity: 1, unitPrice: 9 },
            { product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2 },
            { product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7 }
        ]);

    // fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
  }, []);

  const classes = useStyles();
  const saveAddProduct = () => {
      console.log(addProduct);
    setData([...data, addProduct]);
  };
  const deleteProduct = (selectedIndex: number) => {
    setIndex(selectedIndex);
    setData(data.filter((x: any, index: number)=>{
        return selectedIndex !== index;
    }));
  };
  return (
    <div>
        <Container>
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h2"
            align="center"
            >
            <h5>Products</h5>
            </Typography>
            <div>
                <Button color="primary" onClick={()=>{ setOpen(true); setAddProduct({}); }} variant="contained">
                    ADD A PRODUCT
                </Button>
            </div><br/><br/>
            <Grid container spacing={3}>
            {data.map((infos: any, index: number) => (
                <Grid item xs={12} sm={4} key={infos.id}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    />
                    <CardContent>
                    <Typography color="primary" variant="h5">
                        {infos.product}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                        {infos.type}
                    </Typography>
                    <Button color="primary" onClick={()=>{ deleteProduct(index); }} variant="contained">
                     - REMOVE
                    </Button>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            {data.length === 0 ? 'No Record Found':''}
            </Grid>
        </Container>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={()=>{ setOpen(false) }}
        >
            <div>
                <Card className={classes.card}>
                    <Typography variant="h6" id="modal-title">
                    Add Product
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        <div>
                            <LabelRequired labelText={'Product'} htmlFor="product" required={true} />
                            <input
                                id="product"
                                type="text"
                                onChange={(e) => { setAddProduct({ ...addProduct, product: e.target.value })} }
                                className="form-control"
                                placeholder=""
                            />
                        </div>

                        <div>
                            <LabelRequired labelText={'Type'} htmlFor="type" required={true} />
                            <select name="type" onChange={(e) => { setAddProduct({ ...addProduct, type: e.target.value }); }}>
                                <option value="food">Food</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div>
                            <LabelRequired labelText={'Quantity'} htmlFor="quantity" required={true} />
                            <input
                                id="quantity"
                                type="text"
                                onChange={(e) => { setAddProduct({ ...addProduct, quantity: e.target.value })} }
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <LabelRequired labelText={'Unit Price'} htmlFor="unitPrice" required={true} />
                            <input
                                id="unitPrice"
                                type="text"
                                onChange={(e) => { setAddProduct({ ...addProduct, unitPrice: e.target.value })} }
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <Button color="primary" onClick={()=>{ saveAddProduct(); setOpen(false); }} variant="contained">
                                SAVE
                            </Button>
                        </div>
                    </Typography>
                </Card>
            </div>
        </Modal>
    </div>
  );
}

export default App;