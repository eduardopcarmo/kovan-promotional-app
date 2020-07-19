import React, {useState} from 'react';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

// css
import './Contact.css';
import { FormControl } from '@material-ui/core';

// material-ui-styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FCEFFF',
      },
      '&:hover fieldset': {
        borderColor: '#FCEFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FCEFFF',
      },
    },
  },
  container : {
    marginTop:'70px',
    marginBottom:'70px',
  },
  beeContainer:{
    position:'relative',
  },
  form: {
    padding:55,
    backgroundColor:'#FCEFFF',
  },
  inputStyle: {
    width:'100%',
    marginBottom:15,
    backgroundColor:'white',
  },
  btnStyle: {
    width:'100%',
    color:'white',
    backgroundColor:'#A53BBA',
    '&:hover': {
      backgroundColor:'#A53BBA',
    },
    textTransform:'capitalize'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  
  return (
    <div className={classes.root}>
      <div className="center">
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{padding: 20}}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Thank you for your interest! We will contact you soon.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{color:'#A53BBA'}}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </div>
        <div className="sub_title">
            <h1>Contact Us</h1>
            <p>Like Kovan? Or have a question for the Kovan team?<br />
            And how the application can work for your group or team? <br />
            <span style={{fontWeight:'bold'}}>Reach Out To Us!</span></p>
        </div>
        <Grid container spacing={3} className="container">
          <Grid item sm={5} xs={12} className={classes.beeContainer}>
          <svg className="bee2" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" width="190" height="271" viewBox="0 0 190 271">
            <image id="AvatarMove" width="190" height="271" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAGgCAYAAABbp4k7AAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO2dCXxV1bX/150yX5IwJAxGIiBGwUOEolitRMWJthJstWIdQmtfbW0rfb627+nrE16nf219hbbWVmsNbZ+i7VPQGusIsWopVAkHpFEqJFzGAJKQObnD/7PO3TfcJOece+69Z9xnfT+f+8lwh7PPvmf/zlprr722JxaLAUHwjiAI1QCQ/CgBgDlpnHYHAKwHgHpRFDe5/YIh4SC4RBAEFIZa9qgBgGIdz3ONKIor3HzlkHAQXCEIAgpFHQAsMfi81oqiWOfWq4eEg3A8zLpYwQRjqonns1wUxXo3XkEkHIRjSRKMFTq7IlppFUWx0o1XkN8GbbAFgiDUsDtWbZoX4XYAaAeApsRDFMUmjrvKFgiCgN/VyiwsjFYAaAEADHTel+FnmGnd2AqyOOIX4WoAuEvHj+xgFyRG4deLotiu42e7GkEQ8A6P7sHCDL6T9eyxKfk7EQQhm0FwhiiKLW77TlwvHIIg4EV4m8GH2cCm8dYbfByuEQRhBbMytFqEmqZQsxEOURQ9rvoSGK52VZi5a7RoAIvwLxEEoZXdLVeTFaIdFsuoT2OmBAVjdRr9vCHDWZgNmZwPD7ja4hAEocUiPzXdC9u1sMSt9Rq/pw7WpyvT6S8W39qYQR9f6tZkMK8N2mAl2YjGKgBoZEG2dClmAbkmZvUQMrCcjE0av6c1AFCZrmhA3N3AYyxP823L3ZxB6naLQxfflpnSNUmZiulODaIA1bkxyKYEE9THNLx0O+u7rGeymOVRn0Ko8EZR5/a0cxKODFELirE7Zboigmb2SlEUV+t0eo4lDdEwJPU76ftLztFoYTNkrg9wAwmHsD7ToJgoirUaPj+TBKUN7I7mytiHRtHoYH1Eg9gi3C4cpgXFBEFYmYaAoDlc67ZEMo2ioZtrQmSOq4OjZgbFWNCukgXxUoE+9iZmMrsCdq5aRKOGRMN6XJ8ABhYExdgUY73GehDcL6Ri/bEphTWWEA2avrYBJBxJmB0USyPVnVvxYHGgphSiTaJhM0g4LIaJVb2G2AeX4iEIwqYU605INGyI2xPALIdZMjVsgKjxGG/JYixgTKLhQMjisAnMZN+kIe6xlIdpSBbX2Kbykg4KhNoXEg4boVE8HD+gNMY1XLsOxAmQq2IjmEmeym3BWMh6NvicyooUorGKRMPekHDYDI3iMZWtGHUczEVRq7jVmMlCNcJcSDhsiEbxWMiCi05DbS1OByvfSNgcEg6bwsSjjg0mJe5jd3BHwGaF1GZRVtIKYWdAwmFjWAA0Vdq5k+IdahZSI60Mdg4kHDaHBQlXqbRyKgs22hpmbagFRMlFcRAkHA6ABQsbVVrqBJdFzdpYQy6KsyDhcA6p4h22NfNTWBsdKUSFsCEkHA6B3ZHVBthCG6ekq7WbCjY7EBIOB8GCh2oui+3u3GwRn5q1QQFRB0LC4TzUrIqpNrQ61AK3ZG04FBIOh8FcFrUqYraxOth2jWp5G2RtOBQSDmeyUiVQaierQ83aWEvWhnMh4XAgbMCp3a3tYnWoJa+RteFgSDicy+oUVoelhY5ZXolSUHQ71dlwNiQcDkWD1WF1Nqmau8R18WU3QMLhbNSEYyELTlqFmsVDGyk5HBIOB8OsjrUqZ2CJ1aHBTaH0codDwuF81KwOq+IcasclN4UDSDgcDgsyKhX8mWrR4rcalefITeEAEg4+ULuLW5HToZT01UpuCh+QcPCB2l3cVHeFbaepBBUg5gQSDg5gd3G7uCskHC6AhIMf1NwVM60ONZEi4eAEEg5+UHNX1KwAvVESjg6Kb/ADCQcnsEHZqnA2aitU9UYpf4NSzDmChIMvFF2BFEFLXaDAqHsg4eALtcFphruiluJObgpHkHDwhZpwmDGzQsLhEkg4OILFOZSW2lstHBTj4AgSDv5QGqBqmyHphaJwULUvviDh4A9LA6QKKM32EA6FhIM/1GIJRtfnUJr2pfgGZ5Bw8IeVwkG4BBIO/lALQpJwELpAwsEZKYKQVgkHJX9xBgkHn1AwkjAUEg4+UYpzmLlmheAYEg6CINKGhINPKNmKMBQSDj6h9G7CUEg4CDOwotI6YSAkHIQZlFAv8wUJh8sQBIEGMZE1JBwuw+BVqkpL+kmsOIOEg9ATpaDsHOplviDh4BMKRhKGQsLBJ1a5BorTwBbWAiEMgISD0BO1+AnFOTiChINPlAapUvBSL9QSz8h94ggSDj5RCkYanVGqVkSIhIMjSDgI3RBFkSwOl0DCwRkpgpBmrGFR2zWf4hycQMLBH2qD04xVs2riRDMrnEDCwR9qLoEZFgcJhwsg4eAPNeEwY5sCq/evJUyAhIM/FIUjRfBSF9gxlKZ951Ccgw9IODiCDUqlrR6VgpZGoGZ11Lr9e+IBEg6+sHpGJQEJB+eQcPCFXYRjvcpzS8hdcT4kHHyhJhymbYokimJLir1dyOpwOCQcnCAIQqVKqnmHGYHREahZHXUmt4XQGRIOfrCFtZFEvcpzC5nQEQ6FhIMf1Mx/04WDWThq7soKE5tD6AwJBwewYOMSlTNRcxuMZLXKZ9dRkNS5kHDwgZq10cqClVagJljFFCR1LiQcfKAWbLTK2kjMrqxVeclKE5tD6AgJh8NhQUa1XejVgpRmoHZ8XGpPMywOhITD+agFGbdbMA07DFEUMTDbqPISsjocCAmHg2HBRbU7ttXWRoJUVgeJh8Mg4XA2tSzIqIQthEMUxfpUU7M0w+IsSDicjdqdeq3B2z2mi1pbi1NM3RI2g4TDobCgotISerCRmyLBrA61WMdttGmTc/DEYjG394EjEQShRUU4GkVRHBqEzA3AAj+V7FGSVPCnMoUAKdGaVFGsidUzbWGPJjlrhwnDxhSfWW0zS4mQgYTDgbBg4n0qLX8UALqYOFSniIMYRQcTlKEHzvAIgrA+RZbrGlEUKR3d5pBwOAxmPbSMEIMjABAGgCkOOJu/MSunXOU1S0VRtCxxjUgNxTicx68BIAoAB5JaXu4Q0UAuGCEaeB4nRrymXhAE2sDJxpDF4QDYIKpj06+ZxCOcAgpIBADGsxqpNRTvsCckHDaFpZLXssxQnsVCiWMAsBcAbrBwkR6hAAmHzWDTrLUpAohuYwO6LxT3sA8kHDaABTxXMHfEjdaFVlpZfspqcmGshYTDQpg7slJD6jgxnA5WLmAluTHWQMJhAUmCcZvrTl5/1pKAmA8Jh4mQYBgKCYiJkHCYQFIMQy3bk8ieDrZYjmIgBkPCYTBslmQ1xTBMBQVkBVtYRxgACYdBsKSt1SnK+hHG0sgExNIqaDxCwqEz5JbYklXkvugLCYeOsGXj9ZSLYUswB6SO1UAlsoQWuekEW+q+kUTDtuD3spHqm+oDWRxZwmIZ9SobPhP2AxfQ1dLUbeaQxZEFbMZkE4mG48Dvq4n2dMkcEo4MEQQBZ0weo2lWx4Lf22PseyTShFyVNGGzJmRl8AXV/kgTsjjSgMUzmkg0uCPhulDVMY2QcGhEEIRaZmnQrAmf4Pe6iX3PRApIODTAgmjPUDyDe/D7fYaCpqkh4UiBIAgrWBCUcA+PkXioQ8FRFQRBqKcl8K4Gt9EkAZGBLA4FSDQIti0lrbCVgYRDBhINIgkSDxlIOEZAokHIQOIxAhKOJFgglESDkOM2CpiegoKjDHZR0OwJkYrlVFmMLA4JlvRDoqEjM6ZVHLm+9orOQMDfy81JxcGpWtcnibne4mBpxpsouUsfxgQLO/71zptzrvvk5fn4gZ1d3fDo79Z3PLX+5WhXV08pB6eIdLC1La4tSehq4WAL1lpINLJnpGDI8drrW+E3v18fEt/dXeHcMx0CK4pVu3VhnNuFgxasZcnEsnHH7vjcpwvVBGMkaIU89czLJ558+sXI4bbj4x1wmkpsF0XRlQvjXCscNO2aHR+78LxQ3WevrZh/3qysPufgoaPwwitvnnj2hcaeva0Hplh/ZmnjyuxSVwoHzaBkBloXn7nuKt8NS68oDRYV6v75aIm8vHFz76uNW45t2/FekYNiIq6baXGdcFAwND2KigpOXFmzIHLjp68eX3VmpanHbt7dAm9ubjqx8S9bu/7x/t7xg4Nhze6QyXSweIdrapi6UTgorpECK8VCDRSSXc0fSBZJ8+6WnKPHTpTbpnEui3e4SjhYfcm7bNAU23HG1CkHrr1mYcE1iy4qnTxpgiPajK4NiknjG28fadrx3sCe1gNWuzerRFF0xfYLrhEOtlnSRhs0xRZMGF96ZMF8IXz5JedPueyS+Vyd29Zt74K4c/eJPa0HerbveC986MixMhPdnPPckN/hJuFocXPZv9NPm9g659yz/CgU8+eeA0YEN+1MwjoJ7T/c+/4/97X9davo7+ru8Rvg7jSKoljDV++NxhXCwXbvcs1erhijmDZ1StelH5tfJMw+szTbKVPeGSkqnd09frRUevv68zIUFu5nWbgXDkEQKlllci5nUdDlqDqzcuCMqVNyFl48rxyDmW6zJswAhQUFprOzB7a8vROzRvF/uceOn+jH35PdIZ/P1x2JRE7jOavUDcLBRaIXuhpTKyZ5K6ZMjJ4/b/ZUDGDaacaDOAUKTFd37w8nzbj433ntFq6Fw0kBUXQvxpaMOZkQh5kzTi+rOG1iPlkQjkXK7YBgFZe5HX4btMFIbDE1htYC/iwpDnpnnz0jir+j1RAMFsCUiWXApj9L2YPgg2J2/XGZjs6txXHH7bfc+NaW7U/o8VmJgZ8MzlAECwvCiX8lLITE3xSQJBhn8Gh18OuqdDZjWvlCG7SEcDerIFjFXVIYn8LR2Yypv9ts0BKCwFhHJQSruJph4bV04AobtIEggMU6uItz8GdxdDbjHOVeG7SEIBK0QrCKq7lzHi0OKmFP2I2p0NnMVRo6CQdBmANX1yVfrkpc1W2X8NXX1QmHP2iWHn3dndCyfav0/xbx75o/o6R8svTIKwrCxOlVUFI+BSZOP0v63Wm4uD9KeQmS8iYctkkvb37rNWlA4OPwnvcMPVal8BGonDMfqj56mW0HDvWHxHIIVnGx+I034Wi3cjEb3kE3P/17aH7rVejr7lJ9bV5h0bCLGi/0kSTuzAm03JHxLlx95RJYsPQW6W5sJdQfo9gAwSouNnPiRzg6m/ELecaKQ7cfOQjrf3Sv7IWMAwIHAQ6KSmH+kGmdDXjXRhMfB5F0F1cYQDW3fMmSAUP9oQoX7gpPwmGJm9L00gb480P/b9gddeK0s6S7XGKAmAEOGHQH8IEDN7kttd/4rmntoP5ICRfuCk/CYbqbgne4X37p+qG/q69YAjW3flkyj60EB8vmp383dOfF9tzx0B8Nv9NSf2iCC3eFj9Wx8RRz02Mbm373C+knBuNqv/E9ywdIAgwK4gPvuutWfk264+Lgwbu+kVB/aIKLfA5e8jgsUXAM1uFdte7Hj9lmkCSDrsGK370kmed9XScNPx71hyaKeUgG48NVsWglLN7B5KL/mvEVAPgLADwBAG8g/i78PTZ46hMi/QDRvlM/MyDh4xs9mLPuD5Mwqz9UcPyKWV6EwzkngWIRKAbwBwE8aRp80UGAcBfA4Ifx33nDJCG1AY0QrHK01eF84bBptugocFDklQN4c/X5vMEOgIFjzhcQtwppsMpjg1ZkDA/BUXsrN9458ybFB4ie4GDDx8CJuIDEIhafaJroIaTYtzml8YfThBRveMGqTTZoSUbwIBz23a8TB3Zuefp30nTAQYPmfe8hZ5juJKQJatjm546EhMMoUDByUtcebj/UCi3vNMLh3U1w+P3tw57LC5bAxDPnQOXchdJDEbxrF5wO0HcIINxpy+6QICFNxtEbVDs7xtHZXAIAJ2zQkuHgHTWgnlbS9PxvYfOTa+DwblHbRxYVQ/XHb4UFn7kLSiap7GSJ4oFmu93QIKTNr2+A5sZn4yIq0y8lE6fCxJlxIcW+yCsqUf6wWNTuQuro4j5OFw77BUZTiAYOjj//5G5oPzyqcLpmaj7/bVhw49eUB07vAXsNGJU+6etqh83rfgqbn/wp9HWlJ3jVi2+Fmtv/y5lCGsex61acLhxYW/QnNmhJHBwcOEgUWP+dz0NTw291ORTefW+8//8kV2YUeLft2WcPU11FNFBEsU/SFYyRLPjMVyUBcYyQnuJSpwZInZ45ah9Tz5sXN8dlwLvqL2+dp5toIGix1H/5cik+MgqMIeQrC5hpJAKWMqBgrPvWp7MWDWTzkz+T+gLjRbKgeOH3Yz8cG+dwunDYp+PzymSDfigaeFFrjWWkAw66dd/6FBzevX30uzBgmjte92NqRkFIjRBRBPsXP1e2L+wipKNxbIyDLA49wLuqwvQixjOMEI0EKB6Kd9vA2FMZmGajIKRoaRjVH6p9YbWQykMWh0WoRMVMJEf+gkQfXu87qxw4YNZ/53Ojn8GBq9A2Q1EQ0k2//m9ofv1Zw/ti3beuk3/SSiGVh2ZVTMcuu7UpBETRJF+9dEbWPnzZtHNg/qe+DIUlcQFo2dYoTeUO9HaPem3tfz4qTVOOomu3uQlRhdNHDVCMxdTfuUiXj8c+Qbo/PArd7UdlX4MzTxgwHQXOsOBMi11waOq5k4XDHlOx+acB+ItG/Rvvrpse/U5WH43TjFd+5Yej/o+m+Es//9bo10+cCiue+efoD+pvAxj4MKu2aEZBSKVA7rbXs/po7I+Lbv7GkIgCE9Itf3xI9vUrnv6n/FSt2UKqjiM3pXayq2K9mefxyYoGsAQvrfSFATYfisK69yJQv+vUIzD309Anc33jYJDLJMWZFnSPRpEiGU1X/KOraqG1ka1oICNFA6k8byHMuvx62dejeMtiZn+kxpHuipNTzq3vcIWAKA4UrQlem/ZHoXF/VPa549EC2NMRg4IAwMQCD+T5Tj1XWFom+x4UrKpLRlS2wsAgipzRd1kFIcXkLq2098dg86EYtJyMwZGeU9bwBefNgosC4wDCAIUjrtqZF10D7776h1FHiIvoo6OPLK1pMckCS41K+qt94XXTaXNQEY5UoJXxSzGiKBpId3c8jtEzCNJAah9Ieu5EW3rH1ms5vxoK/aE1IIoiumZbBP52ODpMNJCuAYCOfoDWkzEIdcUgkvR0IFf+uBhfkrXAEkJqDxw5s+Jk4bC+w33yg1GLcKArMnJwjGTTplNJhdEYwMGuGHSHAQb7e+DgP+S3AMDBIpvL4Nd5NaocMsKhpS+Q9R9oE1GkcwAkSyzhxnW3H1N8n6VCyjFOFg7rTTyFbETZgZsE3llTiQayZcsWePDBB6Gnp2fof2JLG/z5oVWysyoJ+jrllj+YcIeVEVItwvHnlihsP6reHy0tLbBr166hvwejcSFFy6Pp+bWK7xu54ngIM4RUGxTjcB0Ky8PVpmATgVCtoNWxdetWqKyslO66J06cgL+8uAHee/4R2Pnyk7KfIpsApWAd6YqMkOK0tBrogqFrooX7778fbrjhBqipqYGCggIIHT4KTz/yWzg354jiu5VF3DauCgmHyTgyqNR8Igr9acYoUTDeffdd6XcUkikzZsH0f10t/S0nHu2HLJrdkxFSxTs+Y5OKezIS7IfHHntMeiT42c9+Bjct/Tis++ZSaNvz7qj3KIq4GULKMU52VWSWhdofvMNmw44dO6R4R393J7R9sNOJXTAEWl+tWfTHF7/4RbjxxhvBXxCEZfc/I9UsIcyBXBWTae/P7nhf/epX4eTJk9Cz5UnwH9ml4R325bCGOI8a69atg2XLlsGcc2fBq7/6ti4rbS3A9G099ICEw4Hce++9cNs5Pqgc4+hC2XC4Ozvh6OjogCVLlsDSKy6Gqftf1K1dRGooj8OhYEIYERePjS81UE+YDAmHyehhJRTnAuRxYCtOLNRH/EhEzYeEw2SqJ2R/kacSH6yO7gT0GvATCx1xulxBwmEyJbkemJql1VFzmvrXJluH1Iag1ZRtXyBVpXQZmw31eDYo7BpWed4lqh9aO90LuRnmHy08zSuJT9pEetJ/jw7gdgZqpBLBVFww0avqttEUrTGQcGRDTF44SiapJwPiwK87x5e2eMyZ4NE00GQ3b4ppT7TKGBkhVd37hLldOPgzobwgdX8oWl8WCSkvkHBkg8LFp7rrGgMDgygexRoTGNHSqJ2eWmkUrZ2ICVslyAiplr64utIriWI6YL+h5ZYqSKxo8ZghpFqJbyzmKCiPIxsi8tlcVQuvBfhu6s9F8Vhxnh+ajkah6WhsVBYlDg703xdM8mh2T6oWLpF/wow7LB5jxApZLcIBkvvmg5Jc5dokyZxV6pFer2VmSfH4ZgipVhy4KRMJRzYobPKD5jnuMqa1UHH1BC9UT4j/joVsMBU7k6nKxDaRowh36X/ucigJ6SXXaqrJgW4HzjrJFfJBEUW3BvtK65Q29seookYJyFXJChKObMHitzKl6LBQbiYVziXLIsP1Vws+o7AtpFm7mCkcB9ultZgPnv/VlfpM0yqKhllCyjEU48gWhX1JsS4obk1oFnh3xf1kR4G+vJl7p8ocS9ptP8VMkxHIVjkHE4WUY0g4sgVNXgWzFy/ciWcKpjSj9tuPylsbgybX1lQQKcVBbBC4PYJshXOzhZRTSDj0oF++dB0O5Npv/8bwXAIcJLJmOQ6SgROGHnsUCkKKVge20wxQrBWFymwh5RQnC4d6hRgzwYGi4DdjHkHdL141TDwwCKs4SPqPWLN/iIKQYjsxUGok2M83/vBp+SNYIaSc4mThsNcUFu4OppAbkBAP3DBJT65e8YDkosiCQmaVSa4ipNheo9w3FA2pn+VcFLBQSNWxzw0wDchV0Qu8IHv3K34Yiscdv/u7ZCFkCwpQ3YOvSLMVsmAGp9XbHCoIKbpvd/z2bV36IRkUI/xcxUxRK4VUHcflcIDDt4DEopt32aAlw1HYAjEZrPyNmxSluwEzCgaa+7K5GglwsPbsA4jaIMEJk8EKTld8Gvc8wd3rs63chbNX2C+K6e0opD0tdrQ2kEYIVtXYoB1p4WThWAkA99mgJaPRIB7AqpHj4Glu3CBV45YbQHgnlaYz5y5UzktIYCfRSJCiL7AK+uZ1P5WENF0BScR3FF0TsGmfDGcNBKtW2KlBWnCycNQBwGMaXmkNGsVDN/Cu2nvAngNEY1/ERfRZOLy7CQ7vFkc9jxYXrj1BEUWrK9UCOgeIBrIKglUrbdCOtKDd6o0E9xnJnwLgDRh7HPTfpZiCLU3xOCSkSiyFYNV6ezZNGSennDfZoA3q4EWLvnXOeICcUv0/H++oOFPghIQmbCOuZSEhHQkFR02ns9k5jcfBggIis64lbaTsxw/jOQnOGBynwM2eSUiTKXXi6linC8cmx+1LgQMHxQMf6W58jHdSXGfBQ8o0CSnSAcEqR+5I6PTVsS2OEw68sAc+jD9QRFA8EhsgJ9eywMGArg7+xNoRvC0DT+Sa9Le5WUjt724r4HThwI6/zQbtyAwUEZVFcq7A3UJKwmERju14Qgb3CalFu4Nnj7NTzoNVm2zQCoLIFMfe+HhYq+LIRUIE4eQbHw/CQVYH4UQcfcMj4SAIa3D0dUvCQRDWQMJhKfGsO4pzEE6DhMMGkNVBOIntTkwzT4aEgyDMx/HXKx/CEV+WTDXvCafguGX0I+FpJ7f1jk4/T0E4GoDBaB5EYn7pMRKfJwweiC9Y9Hnjmz/7PQPs71PPGU005oNozAsx8LJ2eiASjbc3Cl7p+ZH4PYNSG3O8veD1OGy1b/p08JC4yJNwbOJVOHrDQYj6ghAoyIUcnw98/tFfWyQchsRKZ/wd6R+MC0hkMP5cQlw8nujQAMWfXkhvsIZjOaeOG43X1kCRiIEHvF4veH0+8Hg88XZ6PJDri4sF/h+fH/V5g4MQiUSgp7cXcr3tEPDK70HLCY63NsDxy+qT6WzG5cncbZqBlkZnuARKx43L+rMS4oKPaCQuFvgzGk29Q3wy/sCpQjwJEcOfKBbZgO06GArB5NJe0ywkC3Bkxa+R8CMcIIlHPW9Wx5t/3wu/+f0f4Qtf+AIsWLDABi0yhsHBQVi3bh389re/hSfrfwJjx3C5H7pj62+MhLdvh7s4x3MvvAJbt26VHsFgEG65+WZYet11UF5eboPWZc+ud9+Fp595Bp566qmhz9r6zi64qsacPXdNhgs3BbizOECyOnB+3NjNWk3kti9/F7ZtH13xe/LkyXDxxRfDokWLYPasWVAUDDrifI4ePQrvvPMOvPDCC/Daa6/JvuYLy2+Cr95ea3rbTOBSXlZ082gP1ttyo6ZM8cgL+8GDB6W7dOJOjUJSVVUFCxcuhLlz58K4sWMtFxMUiaNtbbBj50546aWXoLm5GTo7O1O+j9P4RitPZSB4FA577vCWIWOKCjW9EYUEHyPv4vPnz5d+XnnllZCTkwNnzZwJY4rjBhm6O4FAZhXHuzo7ob0jnjqzf/9+OHToEBw5fBi2/v3vkjigSGTK5Enj9e1Ee1DP08nwJxzBqhbobG50XC1SBarOnAqNb2zO+P0YG0n+6QQqJo91TFvTgCvh4HXT6dU2aIMunD+vioOz0E5RYSHMP2+WU5qrlbXSDY0j+BSO+Dx5qw1akjU4iHAwuYV5583m8Uy5sjaAY4sDcdx+nEpcesn59myYASxaOI+3U2rksTYuv8IRrKrnZeFb7ccvsUErjActqyWLa3g7Le6sDeDc4gBeYh3orsyr5tKEH8bNn1lso9boQiu7gXGHG4SDC6vjls9cY4NWGAdaG7fwJxzcuMsj4Vs44lWWuLA6LrtkPsyr5m62YQi0NoIac1YcArfWBnCZci5HZzNOhU21X8PSY+u2d+HzX1mly2dNGpMLF06fAB+ZNhGqyoMQ9EWhAMKq7zkRDUBvOAbi4S5o3NEC7xzogK5+9fdooaiwAF58+kHehGM5CYfT6WyuA4DHeDiV//zuL+DZFzIL0p85oRA+u2AGXFRZklIktHIs7IM/7TwMf9reCodOZlZH4zv3fqN9D6kAACAASURBVJm3oCjOpHAX5U3GHcIBknjgdntzbNCSrOjs6oarrrsTurq17a9alOuHZedPg+vnTITCpOpaHiwIVFAEvsIi8Obkgkfat1VdTGK+eHp6dHAQwu3HITowALGkWh6hXg889XYLPL1tv+ZTRPfrsQfv07GHbAE3i9mUcJNw4B1gow1akjWvvb4VVvzHj1Q/BgXj9otnwNJZZeCPsWpfgQAExpWBL+BPKRJaiXn9EOnpgsGOdoix4kDdMR/88s09KQUEXZQ/rv0RTJ40wayuM4MNEKzicmlvMu4RDuCr0I+ay3LlOZPgnstnQACi4PF6IVBSCv6CQiz3ZWibYl4fDHZ0QLgzPpGFFsi3N2yD3Ue7ZV+/+gffkIK+HIEnXs1berkcbhMOrL7UwkO9DnRZlt+5Ct7/56lrFK2MH39qLpw7LhAXjNKx4M/PB0izNGDWeH0wkCQgT+06DmteHb5a9rM3LIZv3VVnbruMZxUEq7idgk3GXcIBknisAICf2KAlWdO8uwU+95WV0NXVIwU+H7lxrmRl+IPFkDNmDEDMZMEYAVog/UcOSTGRvV0xuOPxLdIszFkzKuEPa++3tG0GgJssVfN2Ukq4TzhAEo9NvCy7R/FYt+ansOKSaYB1xnPLJ4E3u5rBuhPu74eB48egrd8DP/7rIbj/x//J29Qrch4Eq5ps0A5TcKtwVAJAEy8lBgf37oKBdzZBXtlEy60MJXCflf5jRyH/qmXgLRxjyzZmgWtclATuFA7gy2VBovuaIday0wYtUcAfAM/ZC8BbykeR5SRc5aIk4H2tijLBqtXS1BkneE+vAu9ZH7HnyfgD4BUW8igaGP3lLsKrBfdaHDA0y9LEQzp6glj7UYjuegu3R7NFezyFxeCdUyOJB4d8nd2ATEEQBLxe0VLGnCRpHZYoipYkmrlbOEASDzQzt9mgJboR62qPi0eftuxSo/CMmwzes+bzKhqmJ3oJgiAX1F8riqLpVg8JB/AX75AID0L0va0QO35Q/nmPF2KBPICcfIh5A1KuRyxFNqmHbfcopaf3doInOoj7Nsq+1jt9DnimnJn9ediT7dJdP7762hQEQVBbb2W6eJBwJOBw+0gkdmA3RFt3SUKCeRWQN0YSilQioRWPzw+ecB94+rukGR10TTxnzQdPERc7HcqBcY0as6deBUFItdZqqSiKpu0UR8KRDCcL4UYRHoTInh0Q6TDwBun1gb90HHincV+pzJJNowVBSDVQUdAqRVE0xQpy76yKPDW8VEcfhj8AvplzITDrfPCOn6TvZ/v84Jt8BuRUX+QG0fi6RaKhZYl+MQucmgJZHCOJB0s38bT/7Ehi/X0QPRKC6ImjEBvoy+gzPAVFkgj5UIh8XO4sPxLcG8WSqVcmHFpWdptmdbjiG08L9F3jS/C5FQ9Pbh74Tj9TesR6uiQBiXaeAOjvUxQSFApPQTAuGCUTpM9wEZaJRpoUs7wSw6eISTjkiIvHCl6qhqmBQiAV9IEz7NtIa9nuENFIYIpwUIxDiXi9yOX2bBxhEttZ3MtJzGGJYoZCwqEGiYebMT1XQ4V022C42JFwqPD4xS+XPH5NCLb+/MRx2zaS0J2BrmiLjUQDRFFMN2fE8EV3FOOQ4fGLX65kU1voLxbvfr4LIgMxmPfFEggUktbyzP6/9sLmBz6sHOiONgGEMFZQf9MbV1gqIGxWpSONYL3hFgdNxybx+MUv1zDBWCL3fOm0ACy6v4zEg1P2vNKNojHy5HDAYu7GypveuMK0WqIsTlHLdoNLdxFmoyiKhooHCUdcMOq0fkEkHnzy3vpOePtXKQ2LRiYghq1IFQShkl2LtVmkA3SIomhogNTVwvH4xS9Xs93E00ozzyn0wuX3l0kiQjifzf/zIex5Wb4SuwJYx6VOTxdGEIRaZu3qUtJSFEVDC0i6VjiYlZFxngaKx9w7SmDaIu5qZ7qGwe4ovP7fx+CImNEOdLg0ofamN67IeLEbc0fqmGDoWhOGhMMAshWNZKpqgzD3i9yuBOWWE3sGJdHoPpLVKmFppWy64iEIQjUTC6NWY1OMQ2/0FI0E5UIuXPJf4ynu4RA0xjO0olk8WE2NOhMq7JNw6AmbNTFkG0h0XRbcPRZOuzDfsvMj1EHX5K8PfChNueoMui3VcjEPFuxMuCNmrX0yXDhck8eByVwsEGoIA8xfRtfl3JvHkPVhM9p29MPrq45J35MBTGXX1lApQZZ7UWdRcShaHasjmcyHp03z+k4I/bUXLrx7LJSdm2vXvnANaGXs+P1J6XsxmCU/++j/fuKRrh+OZ9aFlQWhDK8Z4gpXhWWC7jX7uGR9WAu6JBjLyDIAqpmT0fboL7q+Y/WXvV0URcNTzt1yRVuyyxbe5TbcdkjKSCTMo7stLLmNOsyapMUYb4n33IBlu+83srqjpmwOxb3FYZW1MRKceZn7xVJKGjMQdEua13fBe890GhXLSElb5CD8pvsBMw+5lu2vYmrxZDfEOEzd+0IJTDJ64c7DMO2KQsl9KSyj9YV6glbdO79st0wwEpT5JkO5bwociRww8jAdrFhPvSiKpq2fScYNV6+tqjdhajM+SED0AQUDg59muiSpQHfFIOFoZW73erOqmSvBtatiFzdFDRKQzLCjYCQwwF1pZO6I6RXWleD9arV92bdkCwQfNIWrjB1iGFpAdyXPkw99sawTzSyJX2iBd+EwJcKsBwkBweDpWUuDtHguCUzeSvSPU0Dx2Bf+IJPWWh6/0AIJh83AxVdYTAYDfad9NB/Oqg26ciYGp1T3v9UrWRh2dEdScbpvRrrCYZv4hRZIOGwKmuKJu2xhuR8qLsyHM64o5FpEEmKB54wC6mSKvaVaW2+7+IUWeBcOLjZUwjsuJpPhIyEiZUIuFwvqUCAww3P/Wz2OF4tkir1jU71kLXNHDKsmZiQUyncYySICLLGsTMiL/3RAYBXFoU3sk/Ja2sR+Wwc5DaCDLYZbbef4hRZIOBwODkB87GCnga5M6fScYT+tWiuDQc2uI2Fo/2AQTuwZyLTSFg+0JgU8bR+/0AIJB2fgHX2kyY+1QkqnByQ3Bx85hR5JVJDCcl9GOSQYj+g+EpF+R3HA37uln2HoYr8TUvwCxcKwcg5WQcLhAtAdiN/tXXvHN51y75S3jS6mYyW03psgDCDXk9fFc7+ScBCEMXARy1CCW+HA0m37Ihll7hGEHtguTVxPeLY46juio7bzIwiz4Fo4uAmONjQ0zEv8/vDDD38S64viKkWgujmEBeRfFYkkX5OMQ4sXLz7Iw/fhGOFoaGiYCQBnAcAkAPgI+/dcudceO3bsXPxJrgphBd6i2EDuvOh9coduaGhI/Po+zmTjNi8oKPhz8eLFbzvlC7OtcDQ0NExmy+LnsUeRlve9+eab406ePCklKWAxlY7oiXTWDRBE1vinxbQERmeyn0M3PyYqKCgoIJvsLCS2Eo6GhoYgAKCb8Ymkjk2LxsbGycmv3x3eCR/J+Zjp50K4l0BVNJsZlZnssayhoQEtkufwsXjx4vft1KG2qADGrIt/YYKRMWhtPPfcc5XJ78fFRl8quteS8yLcB7opY74W3mHAib8DAL+yixViqcXBLIxlTDSyoru72/fiiy9WjPwMnFnBWMfpvummnx/hPnIvjBoV/ESX5lcNDQ0oICutDrJaNh3Lgp2/0kM0kI0bN5YPDAz45J57o/9FPQ5BEKpIQdH50eMG9xIKyOMNDQ2ftPLbsEQ4GhoaMOj5cKZxjJGgtbFly5YypeexEhPGOgjCSAy0NkaCEwX3NTQ0WLLRGFghHMzS+LHWWRItqFkbCZ7vXQf9sT69DkkQw/BNinWaYG2M5BMNDQ13W/FNmCocLKbxsJ6fmcraSIAVp5/vfULPQxOEhCcHIoXXRqwqzLOMWfCmYrbFsUxPSwM0WhsJ3g/vhDf6X9Lz8AQBhcvC73vHxQYs7AnTrQ6zheMmPT/s6NGjOVqsjWQwULpjcKuezSBcTP4VkRb/lFiPxT0wyWyrwzThYHn7ulobL7744mSt1kYyGO94tW+Dnk0hXAa6J0W3hf9hQVxDCV0mGrTi2NWxaG3s3LlzXKbvP1S2p7PwhvD7OIWmb8sI3sFAaHB5eJcNLI1kPqL9pdnj2NWxaG1k8/5FixYdCsyIdQa+Ft7R+4pv8uAuz7holydHvxYSvMFmTtpyZmeVUs4FjhSObK2NGTNmtFdVVXUm/s5fFDmYvwgODuz0loRbPMHIUU9+bAD80eOefDRJYwOQtjtEOBO0QGMDHh9+5ygUeBL+ilhX4Oxou80sjJG8Z+bBzBQO3RbpZGttLFmyJCT3f7yT5MweXvINrZH+Ld5J2RyPcA6eMTAwpm7Q1EGoE6YugjMtxrF48eJOVi4+K/bt21eQjbUxe/bs4xMmTFCNa3g8nlyfz1cSCAQmxdq947NtM+EcvH5PXk5OzlS/31/m8/mCHo/HKVa5qTvCmd0peHILs/mAZ5999rRM35uTkxNZunSprLXh9XrzvV5vIT48Hs9Q3bBYX9ST6fEIZ4Lfv8/nw2tgjHQNxGL9kUikMxqNdsViMTtuGPMndmM2DVNnVRYvXvwcq3aUEc3NzcH9+/cHM33/+eef31ZYWBhJ/I2Whd/vH493mEAgMAWtjGTRINzH4L7RN9Ok66QyJyenAq8Tm81IPm72Aa0ww1ayVbFp88orr2Qca0Br49JLLz2CX7jP5ytkIpFys9VYP5DFQQzBREQSkmg02h2JRNqj0WivhT30hBVFfkxXTVaIJO1FI9laG9dcc83B4uLiUrxr+P3+ci2igYSP0IwKIQ+6tWiposVqkRVySO+1X1qxytx6eGQUGKdYURzwp9wbsrE2iouLIzU1NWOYlUGbUBG6gu5twpXBnyYFVLGs4N1mxzYSWBIxxpO94447vjk4OPhCS0vL9KNHj+aPfA26FmVlZT2VlZVdpaWl/dlYG0uXLk1r01SPxxMuLCw8PmbMmMNHYP8lmR6XcCblgck7+gt7xnR2dpZHIpG8NK4bdINL8BGJRE5GIpEPDQymPmBlHVJLhEMQhGo2w1Ks9Bpcg4JikY1gINOmTQvPmTNnMNXrEmJRWFh4rLi42C7rDwgLGDwa85adUdZaVlbW2tvbW9jR0TGxt7e3eHBwUPNaK5/PhxbuGIMEZBWbaLAMq+aoV6qJhp5cddVVitZGIBDoQrEIBoPH8vPzu81oD+Es8LrIz8+XNugZGBjIO3ny5Lje3t6Svr6+4lgslnL86Cwg6J78ix0qnlslHEvMOMg555wzOHPmzKEvKjc3tyM3N7crPz+/vaioqMPn86l+iR27esaY0U7CGeTk5PSNHz/+AADgA7q6uop7enpKUEgGBgYK1YQkWUDC4fAxAIimedJ/Yu6JJTGNkVglHNsBYI7RB1m2bNmhkpKS9oKCAkko0n3/YFeEcjoIRfCaYtdVK74G3Zq+vr4iFJL+/v5COdcGxcPr9RZFo9H2cDicanPjLubSP2y3rSOtEo7VAPCYkQeYP39+aO7cuduNPAZBJMPcmu7S0tIjiX+jVTI4OJiHj/7+fhQMfzgczo1EImO9Xm8wHA63JeWBJLaF/Dv+vnjxYlPTyNPBEuEQRbFeEIS6bNPPlcjNzR1cvny5rXa+ItwJs0hSWbuvAcAjFRUVjomzWZnTUMtcFt1ZtGjR3qlTp9p5CTRBJHMZADwaCoUWOKVXLBMOURTb2abSutbwQ2vjpptu2qPnZxKECRQAwD2hUOjeUChUaPcOtzSLEsVDFEW0PJZqMOc0ce21175fUlKSMm+DIGzKBcz6ONfOX5At0q9FUVwPALhZ9KpsBKSkpKS3rq6OrA3C6aD18b1QKPQFu56HbdZtMOtj5fPPP/+xW2+9dcusWbMOp/sZt9xyC+3zSPDEJ0Oh0JpQKJTWFiBm4InFYrZpTCgUWsY2bRrizTffHLd9+/bxbW1t+cePH0clxvnywKFDh6TkLIxpzJgx4/hll10Wuvrqq9MWGzWObekc94+fHPionp9J2J+zvz7lrfHnB+207AAD/d+rqKjYYYO2SNiiLBoLBq1g/t0wLrroouP4sLaFBGEpCdfl1xUVFc/a4auwXDhCodA0ALgLAM6wui0EYXNuZ+PF8pwPS2McrBO+T6JBEJrBnI/vWz1la5lwhEKhy1nqeYFVbSAIh4I32jXsxmsJlghHKBS6lrknBEFkRhmzPCwRD9OFIxQKYRD0drOPmwmBIh8lkhF2poCJx+Vmt9FU4WCicZmZx8yG4nMKTjqlrYRrQfG4y2zxME04nCYaBOEwTBUPU4SDRINwEgWTc6zcJyUbTBMPw4WDRINwGgWn5Tq5JIMp4mGocJBoEIQlGC4ehgkHL6JRODWP0t0JJ2KoeBgiHGRpEE7Fm+vlaQreMPHQXTjYClcSDcKR5E/M4W0K/i4jksR0FQ6mbss0vNQx+PO5ugMR7kT3DFPdhIOVOuMujbyggrs7EKFCbqmfxyLXiXqmui2M00U4mJrdq8dn2Y28CQGqlu4icif4nZrDkYoyPVfVZi0crCH38LrKNa88h4TDRRRV5ulSNNum4KpaXeqY6mFx3MvUjEuKq2i9ipvw87+w8TK2Oj0rshIOVoV5ti6nY1MCY3yDvjxvhOdzJE5hs1qjRnF7ttsvZCwcbNepT5p1plZSOCXgmK35iPTpj/XBjsGtUH2n7fdB0pOsNn7KqOYoK9e+woyzswPnfq18d6S1a97vVzdGJ4RP8xZ7S91y6lyCQrEv8k/YF/4A9kU+gCORA3D1oo/1n/OJsbmhdtd0QwELM9yTyZszLVZ8r5tK/uVPzu0qmxmD0pau6EP13/UWe8fC6b7pcLp/OpR7p0CZb7INWkko0RE9AW3RA8OEYiQr7rgxNxz1ui2eNRsTNisqKp5I941pCwfLDHVVceH+sE+6oOqWfdz/+yf/FOno/dC3I/qhZN4ieZ58STxO980YEpNcT57VzXYtKA5tkYOwL/xPOBI9CB3RD1W7Aq2NyZMm5A5GwI3JfstCodDOdPdsSWtDJhZQ+V4mrXM6FSXdUjzn1cYtka/f82NfqtNBq6TcOxnKfFOg3DcZyrxTgFwcfUGX4wizJFAc2qIHZa0JNfLz8yLP/O4B3+RJE2Aw4j1+uDP/Lcd2SOa0YfJmOlsuaLY4WCDFtQWG8aIK+KLjLl94vu/iC+cNvPHXt3PUXo8XMj7eDw/flRItkmLPWElYTv1OgqJGQiDQisA+TfzeF8s+V+vfVywHFA2IW5ZuXQmNMcubcL8WrW/QbHGwqVdXzKLIMaGwrzovEKnApzq7uuFTt/zbscNtx8fr9fnlvrh7g+4OMIGRfvqm63UIWyMJAfQOCUJb5ID0N1oTRnHFpQtOPPDdfx1S7Q97crd2D/h13UbUYdyr1WXRJBwspXy1u/pwOMV5A9PG5A3OSvyzeXcLfPYL9/QODobzzTh+QljyIF9yf+L/mwy5nvjh7Wi5JCyFBAkR6I/1Dv3fSGFQY/LECR/+Ye39Y4NFp2YkD3fmvzoY8bo5U1izy6JVONa4fbe1gC9aMDHYO6y2gdnikQ4JoUkmHrTVr6k4pTkSvVwII5ETjUjM03uwo+AVWzfcHJ7QMsuSUjhYeqoj9kExminFPZd5PbFhSTN2Fg9iNHKigfQM+Pcc78l9l7pM4vaKioo2tReoZo6ygOhNujfLoYSjnr+MbHnVmZXwv498P39MsJDnxVFccNaMqcfkRAPpHvT/ze39k0TK5M5UKec30d6uQ7TFYp675Z5A8Xjhjz8vxruZNU0jUnHdJy479oe1PxovJxoA0No36PsBdeIQs1OtZVEUDpZW7tpZFBmeyC09cxcANMo9iRfkn//vwbGfu3kJWR42IhDw9/7P9+7uWfkfd6jNgK1mswmvua6DlFFNvVCzOMhFOQVm1r3K/lqp9sIVX/ps8aM/vw/IdbEedE2ee2JN/qKaC9SsZvye6tnvj2O4ww19o4EytULHssLBrA0qOHyKXw/9FqzapGR1JJh/3izJdSHrwxpyAoE+tDLQNUkkd6mwGoJV0tI2FhDc4Ka+SoFi/WAli4OsjVM8V1FRsWfE/1StDmCuC1off/7jgzBjWoXBTSQS3LrsEwMb//RwXgorI0HHyPwkNhW5lzpUQtHqGCUcZG0Mo42Zr8OJWx2a7kx4x3v6dw8Aui9nTKVVtEZx0QXVgCL9b1+5NUchACrHioS1MYJfG9dSxyFrdYzK46DNlIbx/YqKis2yz3Q2lwBACyZtpvOBW7e9C9/90SOwt/Wg3m11JSgY3/7GF0CDSzKSRghW1Sg9SeNgGKNS0YcJB8vbeJSmYCX+VlFRob4SuLO5FgCeyeTDDx46Ct/50SOw5e2dMBgOZ9pGV1JYmA9LP34pfOnz10Ma1kUy6KJUQ7CqRekFNBaGMWosjBSOy928AjYJjKx/LVX2nERnM0bkb8v0QLhgruGlN+GRtU9D2zFKA1Hj7JlnwBeXfxouu2R+th+1HIJV9alexMpjZlQhi0OGZZOOFA7Xr0lh/LqiouJZTa+MuywY85iT7UHRCvnpw+vg9bfePtHV1UNr7QHgzGmnww1Lr4TFV16UqXUxkjUQrNJc9jIUCn2f94LcGhm2hmVIOGgF7BB7Kyoq0rO6OpsrAaAp3XiHGrgG5s3NTSeefaGxZ2/rgSl6fa7dwYSts2eecey6T142/opLF+TrJBYJVOMacrDJgp+SywJtFRUVQ2vWkoXD1fU2klghM/2ams7mamZ56CYeCdCd2frOLnj19S0HNm8V/UePnSjX+xhWcsbUKQc+duF5/oUXzyvHHBiD2A4ANQqzKKrQQs8hhsZGsnD8mueNlTSiaUmxIgaKRzIoJGiRNL7x9pGmHe8N7Gk9UOQU12bC+NIjVWdWDsydc3aRMPvMUgOFIpmMRSMBufESmNMkVQmThIOZY26fux5mimWMSeIhB0717m09eHzP3v1df90q+iORSHjf/sNTzW4HuhuTyse3lRQHvbPPnhE9f97sqThdiosBLSBr0QBy5RMMjZGEcJAplkbZtJRYKB5KoKggnZ09OAXcmnhZ6MBhb2voUDSdz5pz7ln+YGGBNIfs9/vy0MUAli1rkTgooYtoJGAV/hXTsF2CNLuSEA7cJ+UCF3fGkAmmG53N1e0dnc+WFAcp39wa1qpkhmYMuSywBhd8JlLO3dwR8mnl2RKsavrBT37zib9v22X2+bieI23Hccq1Tm/RYKBwuBl02cDLMuTcHBRdk85+EunwwwceEj/3lZWtD/3mD4Y1njhFV1cPfPO/Vh8tn36RYduTslmFzAPozkcyMrwJBXEpT+gW11Cm6aFH/wCf/8oqOHj4qIu72ljQsrvqU3fCn199y/ANlVy+glZKhvO62NrYm9XUq3YwSCoFJ6+/7Zvwv081mHBI94BWxv0/XQuf+8pKaZo60d8msMbNRX/cKhw9JvqqTYlf8ML+4Zp6yfp475+t6u8iUrLxL1vh03XfgN8/+bxsfxsJc1n0j405AKxH6tm3b58bp5jWJJUCNBxBEGT3oLj5Mx+HL3/ueigqcns2c3qg6N6/un5oijkZURQ9ZrbFpTOS96aqcs4jr5kpGgzZUoN4p0S/HIOnaHIT6mCM6Nvf+wVcf9s3ZEUjVUlHg1jNZuZchduEY286G+vqiKL5jO4LBk9JQJRJCMbVn7oTNjSohjBMcVOSYTNy3zf7uFbjJuHoMXLqNQUpA3bJAoLBPpqBic+UaBSMBGYFRofB4h2uyu/w26ANZrE6o1Wv+qD5TogCgi4MPrBgzb133/7mhPGlF9mrK40jEol0P//SG4V4/riQL01MtzgSoPvLNjFyQ7nBbgyOuqHKUXarXnVAEAQcBZksOPu6+OZTWK2qjj2yLhhkU7D483rhohuwMNJPMmhiqyiKli+UcUNKekVFxbVeFwR2XrNaNBiZ3g3ji7SCVbj/RzW7KL/Owf4fHWw9yXIAKIVgVS0r55dWoZ0kLLM2RnAP58lhkl740XwPhUI9nFY4wh3Y7LIUGv3vJRm8r3rYX/ECu6uHlnjHCybXsIedrZEONrixH9bjWh6F11Ur/D8VlsQ3RoIxNGZ1fJ/XMQVJMY7NHPpmqPrqVcrNJdMLe6ogCCWiKMov2ApWrZcGYoLO5oSIVLJBaJWYNDKhiD+UhWIIPM8M3Tmwi3AAC5aGQqF7OBUPaYlGYln9uTYbZNmConGPRTMoiiglgmngUlEUMx8Y8fogJUluQOJvZGEGn9iR5Bq0jHg0ZboqVRAEbN/GTN5rduKXFljxH57Eo6eiouJGSFgcuNArFAq1cZJ+bkvRYDRmOFBrsrqjnrrb2+aurECm8Q0rEr9SwqHlMRRXS87j4KF0oJ1FA7IYuJn6/U7D0fENOVgKwD0cLIjD9g9tGTIkHGyrw79Z1qzs2Wlz0YAsIv8kHOrYZUZFFk7E4/HksTUyc9Spefc45Wp30YAsA6S2KuapN+z8HB8YVYKJx+cdOlX72sgNyoYJR1LevZOUcY2NplxVYTMjma6n593qyPT8WhVnnGwGG19oebzmhPYyZNd3jVqrkmRW2d3y2Ms2iDF7pWu2UJxDHu7iG3KgeLAbnRMKAf1Nyf2XXeTGxOOuRLKHDXmOnZBVa0+yIfMMUr5xesZoWrAb3tfsPMZwh3ol919xkVvCrGJ7rtxkk+mknWxDaCcKRgKyOORxhcWRDNv9HcfY5ayYlh3SIdqY+69ai3fYbvVKsEroKB6XWyQgbUwwNltwbN3JIhHsDFEU014yandYYDSjoKEdE78ygY2xa9myBKvG2BNaXX9Ny+qZ9fFIKBR6nInHtSapI/pYz5pQidxsMk0Eq2ZZmryRqbVhy8SvTGBj7IlQKISzFwvYGDNjlS1a8a+mGytMqx4HOzk8sWdZOu0F7CT1PMGdbO3MZmbK8cimLDJI12t4ndPINL7hWDdF56AI9wAAAjhJREFUCTbGcBC/ysbY5Wyc6XWj7mHrTXZkM8YyLuTD4gxDm9Ow9S4oIOXsZ2EKQelh7+9mP1Ew9jggF0MP8IK/L4PP4TXO4br4hhaSxtgjbGP4aWxMnathfEFS4HUHc0X26hUf1BTjIPSFrQI9kcmH8uLTJ5NFzKfUKTkcvOHGKueWwy727Zm0QxAErqyOLM5nO4mGdZBwWAetW4nD5foU3iHhsA7K54hD8Q0HQsJhHWRxxCGLw4GQcFiEKIpNrJJWumQyjWtnMqpAxvqPsAgSDmvJ6OJnJfYcTxbnQaJhMSQc1uL2OAfFNxwKCYdFsGnITO+4bheOGt6mpZ0GCYfJ4IIuQRBw46FtWcQr3C4c2G/bsB95r4xmV0g4TEQQhBXMP78ty6Pysg1ktueB/djE+pUwEUo5NwGWYl6f4U5uSmS314rFZLOHigJYur+OsknNgSwOg2Giken2j4R2sH83sf4mDIaEw0CSRMMI18LpcQ4j2j+HxMMcSDiMZbWB8QinDw6j2j9naENuwjBIOIyFIv7WQP1uMCQcxmJkoM7plcCMbD8FSA2GhMNYVma4HiUVG5y+VoO1f4OGl6ZLB+t3wkBIOAyEDY4ancVjLU472u5kM6OOnY9eYD/X0AI446E8DhNgUf4V7FGc4RGxovdKJ+duKMFyOlZmkUnbwQKiqymPwxxIOExGEIRaZoVUs4eSkGxnWyGgUKzncT+VkbD08UT/VKrMSHWwDFx8bBJFkcfK7/YFAP4/7CaC8xbolD0AAAAASUVORK5CYII="/>
          </svg>
          </Grid>
          <Grid item sm={7} xs={12}>
          <div className={classes.form}>
          <form onSubmit={handleClickOpen}>
            <TextField
              className={classes.inputStyle}
              id="outlined-size-normal"
              placeholder="Your Name"
              variant="outlined"
              required
            />
            <TextField
              className={classes.inputStyle}
              id="outlined-size-normal"
              placeholder="Your E-mail"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              className={classes.inputStyle}
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Your Message"
              variant="outlined"
              required
            />
            <Button 
              variant="contained" 
              className={classes.btnStyle}
              // onClick={handleClickOpen}
              type="submit"
            >
              Send
            </Button>
            </form>
          </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}