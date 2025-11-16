package com.bank.entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity @Table(name="users") @Data @NoArgsConstructor @AllArgsConstructor
public class User {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @Column(nullable=false) private String name;
  @Column(nullable=false,unique=true) private String email;
  @Column(nullable=false) private String password;
  @Column(nullable=false) private String contact;
  @Column(nullable=false) private String address;
  @Enumerated(EnumType.STRING) @Column(nullable=false) private Role role;
  @Enumerated(EnumType.STRING) @Column(nullable=false) private UserStatus status=UserStatus.ACTIVE;
  @Column(nullable=false) private LocalDateTime createdDate=LocalDateTime.now();
  public enum Role{ ADMIN, BANK_MANAGER, CUSTOMER }
  public enum UserStatus{ ACTIVE, INACTIVE }
}
