package com.vti.service;

import com.vti.Filter.TypeFilterForm;
import com.vti.Form.CreateTypeForm;
import com.vti.Form.UpdateTypeForm;
import com.vti.entity.Brand;
import com.vti.entity.Type;

import java.util.List;

public interface ITypeService {
    List<Type> getAllType(TypeFilterForm form);
    Type getTypeById(int id);
    void createType(CreateTypeForm form) throws Exception;
    void updateType(UpdateTypeForm form);
    void deleteType(int id);
}
