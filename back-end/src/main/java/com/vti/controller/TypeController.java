package com.vti.controller;

import com.vti.DTO.BrandDTO;
import com.vti.DTO.TypeDTO;
import com.vti.Filter.TypeFilterForm;
import com.vti.Form.CreateTypeForm;
import com.vti.Form.UpdateTypeForm;
import com.vti.entity.Type;
import com.vti.service.ITypeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/api/v1/types")
@CrossOrigin("*")
public class TypeController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ITypeService typeService;
    @GetMapping()
    public List<TypeDTO> getAllType(TypeFilterForm form) {
        return  modelMapper.map(typeService.getAllType(form), new TypeToken<List<TypeDTO>>() {
        }.getType());
    }

    @GetMapping(value = "/{id}")
    public TypeDTO getTypeById(@PathVariable(name = "id") int id) {
        return modelMapper.map(typeService.getTypeById(id), TypeDTO.class);
    }

    @PostMapping()
    public void createType(@RequestBody CreateTypeForm form) throws Exception {
        typeService.createType(form);
    }

    @PutMapping(value = "/{id}")
    public void updateType(@PathVariable(name = "id") int id,@RequestBody UpdateTypeForm form) {
        form.setId(id);
        typeService.updateType(form);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteType(int id) {
        typeService.deleteType(id);
    }
}
