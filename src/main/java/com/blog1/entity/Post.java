package com.blog1.entity;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;
import java.util.*;

@Table
@Entity
public class Post {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "post_id")
    private UUID id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", foreignKey = @ForeignKey(name = "user_post_fk"))
    private UserAccount userAccount;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "post", orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Vote> votes = new HashSet<>();

    public Post() {}

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public Set<Vote> getVotes() {
        return votes;
    }

    public void setVotes(Set<Vote> votes) {
        this.votes = votes;
    }

    public void addVote(Vote vote) {
        vote.setPost(this);
        votes.add(vote);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
//                ", title='" + title + '\'' +
//                ", content='" + content + '\'' +
//                ", userAccount=" + userAccount +
//                ", votes=" + votes +
                '}';
    }
}
