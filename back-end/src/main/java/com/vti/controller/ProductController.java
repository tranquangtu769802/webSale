package com.vti.controller;

import com.vti.DTO.BrandDTO;
import com.vti.DTO.ProductDTO;
import com.vti.Filter.ProductFilterForm;
import com.vti.Form.CreateProductForm;
import com.vti.Form.UpdateProductForm;
import com.vti.entity.Product;
import com.vti.service.IProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping(value = "/api/v1/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IProductService productService;
    @GetMapping()
    public ResponseEntity<Page<ProductDTO>> getAllProducts(ProductFilterForm form, Pageable pageable) {
        Page<Product> pages = productService.getAllProduct(form, pageable);
        List<ProductDTO> productDTOS = modelMapper.map(pages.getContent(), new TypeToken<List<ProductDTO>>() {}.getType());
        return new ResponseEntity<>(new PageImpl<>(productDTOS, pageable, pages.getTotalElements()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable(name = "id") int id) {
        return modelMapper.map(productService.getProductById(id), ProductDTO.class);
    }

    @GetMapping(value = "/name/{name}")
    public ProductDTO getProductByName(String productName) {
        return modelMapper.map(productService.getProductByName(productName), ProductDTO.class);
    }

    @PostMapping()
    public void createProduct(@RequestBody CreateProductForm form) throws Exception{
        productService.createProduct(form);
    }
    @PutMapping(value = "/{id}")
    public void updateProduct(@PathVariable(name = "id") int id,@RequestBody UpdateProductForm form) {
        form.setId(id);
        productService.updateProduct(form);
    }
    @DeleteMapping(value = "/{id}")
    public void deleteProduct(@PathVariable(name = "id") int id) {
        productService.deleteProduct(id);
    }
}
