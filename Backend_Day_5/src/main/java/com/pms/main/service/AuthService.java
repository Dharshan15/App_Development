package com.pms.main.service;

import com.pms.main.dto.request.AuthenticationRequest;
import com.pms.main.dto.request.RegisterRequest;
import com.pms.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
