package com.vti.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Product")
@Data
@NoArgsConstructor
public class Product {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "`price`", nullable = false)
    private int price;

    @Column(name = "image", length = 5000, nullable = false)
    private String image;

    @Column(name = "Star", nullable = false)
    private int star;

    @Column(name = "Create_date", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createDate;

    @Column(name = "stock", nullable = false)
    private int stock;

    @ManyToOne
    @JoinColumn(name = "TypeId", nullable = false)
    private Type type;

    @ManyToOne
    @JoinColumn(name = "BrandId", nullable = false)
    private Brand brand;


}
