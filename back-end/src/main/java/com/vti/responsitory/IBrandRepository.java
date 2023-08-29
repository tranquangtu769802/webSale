package com.vti.responsitory;

import com.vti.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrandRepository extends JpaRepository<Brand, Integer>, JpaSpecificationExecutor<Brand> {
    Brand findById(int id);
}
