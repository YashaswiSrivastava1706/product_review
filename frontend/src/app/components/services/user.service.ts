import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
const baseUrl="http://localhost:9090/api";
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor(private http:HttpClient) { }

  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/currentuser`)
  }
  //add user
  addUser(user:any)
  {
    return this.http.post(`${baseUrl}/register`,user);
  }
  //generate tokem

  public generateToken(userdata:any)
  {
    console.log(userdata)
    return this.http.post(`${baseUrl}/generate-token`,userdata);
  }

  //login user: set Token in LocalStorage

  loginUser(token:any)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //User if Loggedin or not

  isLoggedIn()
  {
    let token=sessionStorage.getItem('token');
    // console.log("in tokrn",token);
    if(token==undefined || token==null || token =="")
    {
      return false;
    }
    else{
      return true;
    }
  }
  // logout: remove TOken from LocalStroage

  logout()
  {
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
    localStorage.removeItem('LogginUser');
    return true;
  }
  //get Token
  public getToken()
  {
   
    return localStorage.getItem('token');
  }
//All product
  public allProducts() {
    return this.http.get(`${baseUrl}/all-products`)
  }
  // Add product
  public addProducts(product:any) {

    return this.http.post(`${baseUrl}/add-products`,product);
  }

  public getproductByProductName(productName:any)
  {
    
    return this.http.get(`${baseUrl}/search/${productName}`);

  }
  // add reviews

  public addReview(id: any, data: any) {
    return this.http.post(`${baseUrl}/add-reviews/${id}`, data,);
  }
  public getproductByProductId(productId:any)
  {
    let myToken= `Bearer ${sessionStorage.getItem("token")}`
    // console.log("MyToken",myToken,productName)
   
    return this.http.get(`${baseUrl}/product/${productId}`);

  }
  // return Loggin User 
  public isAdmin()
  {
    const u= localStorage.getItem('LogginUser');
    if(u=='ADMIN')
    {
      return true;
    }
    else{
      return false;
    }

  }

  public getProductById(id:any)
  {
    return this.http.get(`${baseUrl}/product/${id}`)

    
  }
  public allReview()
  {
    return this.http.get(`${baseUrl}/admin/all-reviews`);
  }
  public approveReview(id:any,data:any)
  {
    return this.http.get(`${baseUrl}/admin/update/${id}/${data}`);
  }

  public getCountUser()
  {
    return this.http.get(`${baseUrl}/count-users`);
  }
  public getCountProducts()
  {
    return this.http.get(`${baseUrl}/count-products`);
  }
  public getCountReviews()
  {
    return this.http.get(`${baseUrl}/count-reviews`);
  }
}
