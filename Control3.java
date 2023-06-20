package com.example.demo.Ecomerce.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Ecomerce.Model.Model3;
import com.example.demo.Ecomerce.Repository.Repos3;
import com.example.demo.Ecomerce.Repository.Repos2;
@Controller
@RestController
@CrossOrigin("http://localhost:3001")
@RequestMapping("/star")


public class Control3 {
@Autowired
Repos3 rep;
@PostMapping("/stu")
public String mthd1(@RequestBody Model3 dm)
{
rep.save(dm);
return "saved";

}
@GetMapping("/gm")
List<Model3> getdata(){
return rep.findAll();

}
@PutMapping("/edi/{name}")
public String editdata
(@PathVariable String name,@RequestBody Model3 k)
{
Model3 m=rep.findById(name).get();
if(m!=null) {

m.setName(k.getName());
m.setAddress(k.getAddress());
m.setCity(k.getCity());
m.setState(k.getState());
rep.save(m);
return "Updated";
}
else {
return "no update";
}
}
@DeleteMapping("/delete/{username}")
public String deletedata(@PathVariable String username)
{
rep.deleteById(username);
return "Deleted";
}
}