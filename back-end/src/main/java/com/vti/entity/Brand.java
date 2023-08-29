package com.vti.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Brand")
@Data
@NoArgsConstructor
public class Brand {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", length = 50, unique = true, nullable = false, updatable = false)
    private String name;

    @OneToMany(mappedBy = "brand")
    private List<Product> productList;
}
