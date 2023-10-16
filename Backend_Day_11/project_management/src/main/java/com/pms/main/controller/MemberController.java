package com.pms.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.main.constant.Api;
import com.pms.main.model.Members;
import com.pms.main.service.MemberService;

@CrossOrigin
@RestController
@RequestMapping(Api.MEMBER)
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/getall")
    public List<Members> getAllMembers() { // Updated the return type to match the model name
        return memberService.getAllMembers();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Members> getMemberById(@PathVariable Long id) { // Updated the return type to match the model name
        Optional<Members> member = memberService.getMemberById(id);
        return member.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Members> createMember(@RequestBody Members member) { // Updated the parameter and return type
        Members createdMember = memberService.createMember(member);
        return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<Members> updateMember(@PathVariable Long id, @RequestBody Members updatedMember) { // Updated the parameter and return type
        Members updated = memberService.updateMember(id, updatedMember);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }
}
