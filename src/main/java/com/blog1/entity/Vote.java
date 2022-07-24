package com.blog1.entity;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import javax.persistence.*;
import java.util.UUID;

@Table
@Entity
public class Vote {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "vote_id")
    private UUID id;

    @Column(name = "upvote")
    private boolean upvote;

    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", foreignKey = @ForeignKey(name = "user_vote_fk"))
    private UserAccount userAccount;

    @JsonIncludeProperties(value = {"id"})
    @ManyToOne(optional = false)
    @JoinColumn(name = "post_id", referencedColumnName = "post_id", foreignKey = @ForeignKey(name = "post_vote_fk"))
    private Post post;

    public Vote() {}

    public Vote(boolean upvote) {
        this.upvote = upvote;;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public boolean isUpvote() {
        return upvote;
    }

    public void setUpvote(boolean upvote) {
        this.upvote = upvote;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Vote{" +
                "id=" + id +
//                ", upvote=" + upvote +
//                ", userAccount=" + userAccount +
//                ", post=" + post +
                '}';
    }
}
