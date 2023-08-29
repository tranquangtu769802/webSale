package com.vti.responsitory;

import com.vti.entity.Brand;
import com.vti.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<Type, Integer>, JpaSpecificationExecutor<Type> {
    Type findById(int id);
}
