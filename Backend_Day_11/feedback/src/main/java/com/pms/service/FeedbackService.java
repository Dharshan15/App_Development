package com.pms.service;

import java.util.List;

import com.pms.dto.request.FeedbackRequest;
import com.pms.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}