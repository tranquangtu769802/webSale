package com.vti.Specification;

import com.vti.Filter.TypeFilterForm;
import com.vti.entity.Type;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class TypeSpecification {
//    searchName : search theo từ ký tự đầu tiên
    private static final String searchType = "searchType";


    // hung ket qua specification
    public static Specification<Type> buildWhere(TypeFilterForm form) {
        if (form == null) {
            return null;

        }

        CustomSpecification WhereByName = new CustomSpecification(searchType, form.getSearch());

        return Specification.where(WhereByName);
    }


    // xu ly dk, dung key va value
    @AllArgsConstructor
    static class CustomSpecification implements Specification<Type> {

        private String key;
        private Object value;

        @Override
        public Predicate toPredicate(Root<Type> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if (value == null) {
                return null;
            }
            switch (key) {
                case searchType:
                    // Where name LiKE '%search%'
                    return criteriaBuilder.like(root.get("name"), value.toString().trim() + "%");

                default:
                    return null;
            }

        }
    }

}
