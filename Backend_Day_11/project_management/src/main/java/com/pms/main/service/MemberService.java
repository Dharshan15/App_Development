package com.pms.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.main.model.Members;
import com.pms.main.repository.MemberRepository;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Members> getAllMembers() { // Updated the return type to match the model name
        return memberRepository.findAll();
    }

    public Optional<Members> getMemberById(Long id) { // Updated the return type to match the model name
        return memberRepository.findById(id);
    }

    public Members createMember(Members member) { // Updated the parameter and return type
        return memberRepository.save(member);
    }

    public Members updateMember(Long id, Members updatedMember) { // Updated the parameter and return type
        if (memberRepository.existsById(id)) {
            updatedMember.setId(id);
            return memberRepository.save(updatedMember);
        } else {
            return null; // Handle not found error
        }
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }
}
